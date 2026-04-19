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
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    
    // Check if this IP visited in the last 24 hours
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentHit = await hitsCollection.findOne({
      ip: ip,
      timestamp: { $gt: oneDayAgo }
    });

    if (!recentHit) {
      // New unique hit - record it and increment global counter
      await hitsCollection.updateOne(
        { ip: ip },
        { $set: { timestamp: new Date() } },
        { upsert: true }
      );

      await statsCollection.updateOne(
        { _id: 'global_stats' },
        { $inc: { visitor_count: 1 } },
        { upsert: true }
      );
    }

    // Get current count
    const stats = await statsCollection.findOne({ _id: 'global_stats' });
    const count = stats ? stats.visitor_count : 0;

    return res.status(200).json({ count: count });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
