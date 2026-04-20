const { MongoClient, ServerApiVersion } = require('mongodb');

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Try multiple MongoDB URI sources (prioritize Vercel environment variable)
  let mongodbUri = process.env.MONGODB_URI || process.env.VONGODB_URL;
  
  if (!mongodbUri) {
    // Default to your Atlas database for Vercel deployment
    mongodbUri = 'mongodb+srv://venkatathrinadh05_db_user:eny5QSaY52ufes1G@marks.kzmlscn.mongodb.net/?appName=marks';
  }
  
  // Fallback to local for development
  if (!mongodbUri || mongodbUri.includes('localhost')) {
    mongodbUri = 'mongodb://localhost:27017/marks_calculator';
  }

  console.log('Attempting MongoDB connection...');

  const client = new MongoClient(mongodbUri, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 10000,
    retryWrites: true,
    w: 'majority'
  });

  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('MongoDB connected successfully!');
    
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
    
    // Check if this IP has visited in the last 24 hours
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentHit = await hitsCollection.findOne({
      ip: ip,
      timestamp: { $gt: oneDayAgo }
    });

    let isNewVisitor = !recentHit;
    
    if (isNewVisitor) {
      console.log(`New unique visitor: ${ip}`);
      // Record this unique hit
      await hitsCollection.updateOne(
        { ip: ip },
        { $set: { timestamp: new Date() } },
        { upsert: true }
      );

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

    // Always increment total page views
    await statsCollection.updateOne(
      { _id: 'global_stats' },
      { 
        $inc: { total_views: 1 },
        $setOnInsert: { created_at: new Date() }
      },
      { upsert: true }
    );

    // Get current stats
    const stats = await statsCollection.findOne({ _id: 'global_stats' });
    const uniqueCount = stats ? (stats.unique_visitors || 0) : 0;
    const totalViews = stats ? (stats.total_views || 0) : 0;
    
    // Calculate display count (base count + actual unique visitors)
    const baseCount = 1024;
    const totalDisplayCount = baseCount + uniqueCount;

    console.log(`Stats - Unique: ${uniqueCount}, Total Views: ${totalViews}, Display: ${totalDisplayCount}`);

    return res.status(200).json({ 
      count: totalDisplayCount,
      unique_visitors: uniqueCount,
      total_views: totalViews,
      is_new_visitor: isNewVisitor
    });

  } catch (error) {
    console.error('Database error in count.js:', error);
    
    // Fallback response when MongoDB fails
    const fallbackCount = 1024 + Math.floor(Math.random() * 100);
    return res.status(200).json({ 
      count: fallbackCount,
      fallback: true,
      error: 'Using fallback count due to database error'
    });
  }
};
