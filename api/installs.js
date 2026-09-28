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
    console.error('MongoDB connection failed for installs API:', error);
    throw error;
  }
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { db } = await connectToDatabase();
    const installsCollection = db.collection('installs');
    const statsCollection = db.collection('stats');

    // GET: Retrieve total installs and recent install logs
    if (req.method === 'GET') {
      const count = await installsCollection.countDocuments({});
      const recent = await installsCollection
        .find({})
        .sort({ timestamp: -1 })
        .limit(50)
        .toArray();

      return res.status(200).json({
        totalInstalls: count,
        recentInstalls: recent
      });
    }

    // POST: Record a new PWA app installation
    if (req.method === 'POST') {
      const { name, device, date } = req.body || {};

      const ip = req.headers['x-forwarded-for'] || 
                 req.headers['x-real-ip'] || 
                 req.connection?.remoteAddress || 
                 req.socket?.remoteAddress || 
                 'unknown';

      const userAgent = device || req.headers['user-agent'] || 'Unknown Device';
      const isMobile = userAgent.toLowerCase().includes('mobile') || 
                       userAgent.toLowerCase().includes('android') || 
                       userAgent.toLowerCase().includes('iphone');

      const installDoc = {
        name: (name && name.trim()) || 'Student',
        device: userAgent,
        isMobile: isMobile,
        ip: ip,
        date: date || new Date().toLocaleString(),
        timestamp: new Date()
      };

      await installsCollection.insertOne(installDoc);

      // Increment stats collection total_installs
      await statsCollection.updateOne(
        { count: { $exists: true } },
        { 
          $inc: { total_installs: 1 },
          $set: { last_installed: new Date() }
        },
        { upsert: false }
      );

      console.log(`[Installs API] Registered new PWA install from ${installDoc.name} (${userAgent})`);

      return res.status(200).json({
        success: true,
        message: 'App installation recorded successfully'
      });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error in installs API:', error);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};
