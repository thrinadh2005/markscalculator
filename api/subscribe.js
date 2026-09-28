const { MongoClient, ServerApiVersion } = require('mongodb');

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const mongodbUri = process.env.MONGODB_URI || process.env.MONGODB_URL;
  
  if (!mongodbUri) {
    throw new Error('MONGODB_URI environment variable is not defined');
  }

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
    const db = client.db('marks_calculator');
    cachedClient = client;
    cachedDb = db;
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection failed for subscriptions:', error);
    throw error;
  }
}

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('subscriptions');

    // GET: Get subscription statistics
    if (req.method === 'GET') {
      const count = await collection.countDocuments({});
      const recent = await collection
        .find({})
        .sort({ updatedAt: -1 })
        .limit(20)
        .project({ endpoint: 0, 'keys.p256dh': 0, 'keys.auth': 0 })
        .toArray();

      return res.status(200).json({
        totalSubscribers: count,
        recentSubscribers: recent
      });
    }

    // POST: Save or update subscription
    if (req.method === 'POST') {
      const { subscription, userName, device } = req.body;

      if (!subscription || !subscription.endpoint || !subscription.keys) {
        return res.status(400).json({ error: 'Valid PushSubscription object is required' });
      }

      const ip = req.headers['x-forwarded-for'] || 
                 req.headers['x-real-ip'] || 
                 req.connection?.remoteAddress || 
                 'unknown';

      const subscriptionDoc = {
        endpoint: subscription.endpoint,
        keys: subscription.keys,
        userName: userName || 'Student',
        device: device || req.headers['user-agent'] || 'Unknown Device',
        ip: ip,
        active: true,
        updatedAt: new Date()
      };

      // Upsert by endpoint
      const result = await collection.updateOne(
        { endpoint: subscription.endpoint },
        { 
          $set: subscriptionDoc,
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true }
      );

      console.log(`[Push] Saved subscription for ${userName || 'Student'}. Upserted: ${result.upsertedCount > 0}`);

      return res.status(200).json({
        success: true,
        message: 'Subscription saved successfully',
        isNew: result.upsertedCount > 0
      });
    }

    // DELETE: Unsubscribe
    if (req.method === 'DELETE') {
      const { endpoint } = req.body;
      if (!endpoint) {
        return res.status(400).json({ error: 'Endpoint is required to unsubscribe' });
      }

      await collection.deleteOne({ endpoint: endpoint });
      return res.status(200).json({ success: true, message: 'Unsubscribed successfully' });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error in subscribe.js API:', error);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};
