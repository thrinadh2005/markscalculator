const { MongoClient, ServerApiVersion } = require('mongodb');

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not set');
  }

  const client = new MongoClient(process.env.MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  await client.connect();
  const db = client.db('marks');

  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

module.exports = async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const hitsCollection = db.collection('unique_hits');
    const statsCollection = db.collection('stats');

    // Get IP address from headers
    const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection.remoteAddress || 'unknown';
    
    // 1. Always increment the "total_page_views" (for real-time feedback that it's working)
    // 2. Only increment "unique_visitors" if IP is new in last 24h
    
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentHit = await hitsCollection.findOne({
      ip: ip,
      timestamp: { $gt: oneDayAgo }
    });

    if (!recentHit) {
      await hitsCollection.updateOne(
        { ip: ip },
        { $set: { timestamp: new Date() } },
        { upsert: true }
      );

      await statsCollection.updateOne(
        { _id: 'global_stats' },
        { $inc: { unique_visitors: 1 } },
        { upsert: true }
      );
    }

    // Always increment total views to show life
    await statsCollection.updateOne(
      { _id: 'global_stats' },
      { $inc: { total_views: 1 } },
      { upsert: true }
    );

    // Get current count (using a base of 1024 + unique visitors)
    const stats = await statsCollection.findOne({ _id: 'global_stats' });
    const uniqueCount = stats ? (stats.unique_visitors || 0) : 0;
    const totalDisplayCount = 1024 + uniqueCount;

    return res.status(200).json({ count: totalDisplayCount });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
