const webpush = require('web-push');
const { MongoClient, ServerApiVersion } = require('mongodb');

// VAPID Configuration from environment variables
const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY;
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY;
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:thrinadh2005@gmail.com';

if (VAPID_PUBLIC_KEY && VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);
}

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
    console.error('MongoDB connection failed for notifications:', error);
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

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { title, body, icon, url, badge, tag } = req.body;

    if (!title || !body) {
      return res.status(400).json({ error: 'Title and body are required for notification' });
    }

    const { db } = await connectToDatabase();
    const collection = db.collection('subscriptions');

    // Retrieve all active subscriptions
    const subscriptions = await collection.find({ active: { $ne: false } }).toArray();

    if (!subscriptions || subscriptions.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No subscribers registered yet',
        total: 0,
        sent: 0,
        failed: 0
      });
    }

    const payload = JSON.stringify({
      title: title.trim(),
      body: body.trim(),
      icon: icon || '/icons/icon-512.png',
      badge: badge || '/icons/icon-512.png',
      url: url || '/',
      tag: tag || 'gmrit-announcement-' + Date.now(),
      timestamp: Date.now()
    });

    console.log(`[Push] Broadcasting notification "${title}" to ${subscriptions.length} devices...`);

    let sentCount = 0;
    let failedCount = 0;
    const expiredEndpoints = [];

    // Send push in parallel batches
    const pushPromises = subscriptions.map(async (sub) => {
      const pushSubscription = {
        endpoint: sub.endpoint,
        keys: sub.keys
      };

      try {
        await webpush.sendNotification(pushSubscription, payload);
        sentCount++;
      } catch (err) {
        failedCount++;
        // If device unsubscribed or subscription expired (HTTP 404 or 410 Gone)
        if (err.statusCode === 404 || err.statusCode === 410) {
          expiredEndpoints.push(sub.endpoint);
        } else {
          console.warn(`[Push] Delivery error for endpoint ${sub.endpoint.slice(-12)}:`, err.message);
        }
      }
    });

    await Promise.allSettled(pushPromises);

    // Clean up expired subscriptions from MongoDB
    if (expiredEndpoints.length > 0) {
      await collection.deleteMany({ endpoint: { $in: expiredEndpoints } });
      console.log(`[Push] Cleaned up ${expiredEndpoints.length} expired subscriptions.`);
    }

    // Log broadcast history in 'broadcast_logs'
    try {
      const logsCollection = db.collection('broadcast_logs');
      await logsCollection.insertOne({
        title,
        body,
        url: url || '/',
        sentAt: new Date(),
        totalSubscribers: subscriptions.length,
        delivered: sentCount,
        failed: failedCount,
        cleaned: expiredEndpoints.length
      });
    } catch (logErr) {
      console.warn('[Push] Log record error:', logErr.message);
    }

    return res.status(200).json({
      success: true,
      message: `Notification broadcasted to ${sentCount} devices successfully`,
      total: subscriptions.length,
      sent: sentCount,
      failed: failedCount,
      expiredRemoved: expiredEndpoints.length
    });

  } catch (error) {
    console.error('Error broadcasting push notification:', error);
    return res.status(500).json({ error: 'Failed to broadcast notification', message: error.message });
  }
};
