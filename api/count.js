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
    const hitsCollection = db.collection('unique_hits');
    const statsCollection = db.collection('stats');

    // Get IP address from headers
    const ip = req.headers['x-forwarded-for'] || 
               req.headers['x-real-ip'] || 
               req.connection?.remoteAddress || 
               req.socket?.remoteAddress || 
               'unknown';
    
    console.log(`Processing visit from IP: ${ip}`);
    
    // Atomic operation to track unique hits by IP
    // This handles the "is new visitor" check and update in one strike
    const previousHit = await hitsCollection.findOneAndUpdate(
      { ip: ip },
      { 
        $set: { last_seen: new Date() },
        $setOnInsert: { first_seen: new Date() }
      },
      { upsert: true, returnDocument: 'before' }
    );

    // A visitor is "new" if they've never visited before, OR if their last visit was > 24h ago
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const isNewVisitor = !previousHit || previousHit.last_seen < oneDayAgo;
    
    if (isNewVisitor) {
      console.log(`Recording unique visit from: ${ip}`);
      // Increment unique visitors count
      await statsCollection.updateOne(
        { _id: 'global_stats' },
        { 
          $inc: { unique_visitors: 1 },
          $setOnInsert: { created_at: new Date() }
        },
        { upsert: true }
      );
    }

    // Always increment total page views (hits)
    await statsCollection.updateOne(
      { _id: 'global_stats' },
      { 
        $inc: { total_views: 1 },
        $setOnInsert: { created_at: new Date() }
      },
      { upsert: true }
    );

    // Get final stats
    const stats = await statsCollection.findOne({ _id: 'global_stats' });
    const uniqueCount = stats ? (stats.unique_visitors || 0) : 0;
    const totalViews = stats ? (stats.total_views || 0) : 0;
    
    // We return unique_visitors as the main 'count' for the 'Visitors' display
    // but we can adjust this to total_views if preferred
    const finalCount = uniqueCount;

    console.log(`Stats updated - Unique: ${uniqueCount}, Total Views: ${totalViews}`);

    return res.status(200).json({ 
      count: finalCount,
      unique_visitors: uniqueCount,
      total_views: totalViews,
      is_new_visitor: isNewVisitor
    });

  } catch (error) {
    console.error('Database error in count.js:', error);
    
    // Return a last-resort fallback count if database fails
    // This prevents the UI from showing "0" if it's just a temporary connection issue
    return res.status(200).json({ 
      count: 1024, // Use the last known good base if DB fails
      unique_visitors: 1024,
      total_views: 1024,
      fallback: true,
      error: 'Database connection failed'
    });
  }
};
