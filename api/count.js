const { MongoClient, ServerApiVersion } = require('mongodb');

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Use only MongoDB URI from environment variables for security
  const mongodbUri = process.env.MONGODB_URI || process.env.MONGODB_URL;
  
  if (!mongodbUri) {
    throw new Error('MONGODB_URI environment variable is not defined');
  }
  
  console.log('Attempting MongoDB connection...');

  const client = new MongoClient(mongodbUri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });

  try {
    await client.connect();
    // Test connection
    await client.db('admin').command({ ping: 1 });
    console.log('MongoDB connected successfully!');
    
    // Use the database name from the environment or default to 'marks_calculator'
    const db = client.db('marks_calculator');
    cachedClient = client;
    cachedDb = db;
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    throw error;
  }
}

module.exports = async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    // Use 'visitors' collection which is used by api/visitors.js and contains historical data
    const visitorsCollection = db.collection('visitors');
    
    // Get IP address from headers
    const ip = req.headers['x-forwarded-for'] || 
               req.headers['x-real-ip'] || 
               req.connection?.remoteAddress || 
               req.socket?.remoteAddress || 
               'unknown';
    
    console.log(`Processing visit from IP: ${ip}`);
    
    // Check if this is a new visitor in the last 24h
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentVisit = await visitorsCollection.findOne({
      ip: ip,
      timestamp: { $gt: oneDayAgo }
    });

    const isNewVisitor = !recentVisit;
    
    if (isNewVisitor) {
      console.log(`Recording new visit from: ${ip}`);
      // Record the visit document (matches the structure in api/visitors.js)
      await visitorsCollection.insertOne({
        name: 'Anonymous',
        date: new Date().toLocaleString(),
        ip: ip,
        timestamp: new Date(),
        user_agent: req.headers['user-agent'] || 'unknown',
        is_automatic: true
      });
    }

    // Get the actual number of unique visitors (by IP)
    // For performance, we can use distinct or countDocuments
    // But since we want to be robust, we'll count entries in the visitors collection
    const uniqueIPs = await visitorsCollection.distinct('ip');
    const uniqueCount = uniqueIPs.length;
    
    // Restore the "Original" base count of 1024
    // This ensures the counter starts from the number you are used to
    const baseCount = 1024;
    const finalCount = baseCount + uniqueCount;

    console.log(`Count calculated - Unique IPs: ${uniqueCount}, Final Display: ${finalCount}`);

    return res.status(200).json({ 
      count: finalCount,
      unique_visitors: uniqueCount,
      is_new_visitor: isNewVisitor
    });

  } catch (error) {
    console.error('Database error in count.js:', error);
    
    // Return a last-resort fallback count if database fails
    return res.status(200).json({ 
      count: 1024, 
      unique_visitors: 0,
      fallback: true,
      error: 'Database connection failed'
    });
  }
};
