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
  
  console.log('Attempting MongoDB connection for visitors...');

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
    console.log('MongoDB connected successfully for visitors!');
    
    // Use the database name from the environment or default to 'marks_calculator'
    const db = client.db('marks_calculator');
    cachedClient = client;
    cachedDb = db;
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection failed for visitors:', error);
    throw error;
  }
}

module.exports = async (req, res) => {
  try {
    console.log(`Visitors API - Method: ${req.method}`);
    
    const { db } = await connectToDatabase();
    const collection = db.collection('stats');

    if (req.method === 'GET') {
      console.log('Fetching visitor logs...');
      
      const statsDoc = await collection.findOne({ count: { $exists: true } });
      const totalInstalls = statsDoc?.total_installs || 0;
      const totalVisitors = statsDoc?.unique_visitors || 0;

      // Only fetch visitor log entries (exclude the counter doc)
      const visitors = await collection
        .find({ name: { $exists: true } })
        .sort({ timestamp: -1 })
        .limit(100)
        .toArray();
      
      console.log(`Found ${visitors.length} visitors (Total installs: ${totalInstalls})`);

      // Attach metadata header or return enriched log array
      res.setHeader('X-Total-Installs', String(totalInstalls));
      res.setHeader('X-Total-Visitors', String(totalVisitors));
      
      return res.status(200).json(visitors);
    } 
    
    if (req.method === 'POST') {
      const { name, date, is_installed, action, device } = req.body;
      
      if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required' });
      }

      // Get IP address
      const ip = req.headers['x-forwarded-for'] || 
                 req.headers['x-real-ip'] || 
                 req.connection?.remoteAddress || 
                 req.socket?.remoteAddress || 
                 'unknown';
      
      const isInstalled = Boolean(is_installed) || action === 'install';

      const newVisitor = {
        name: name.trim(),
        date: date || new Date().toLocaleString(),
        ip: ip,
        is_installed: isInstalled,
        action: action || (isInstalled ? 'install' : 'visit'),
        device: device || req.headers['user-agent'] || 'Unknown Device',
        timestamp: new Date()
      };

      console.log(`Logging visitor: ${name} [Installed: ${isInstalled}]`);
      
      await collection.insertOne(newVisitor);

      // If this is an install event, increment total_installs in stats
      if (isInstalled || action === 'install') {
        await collection.updateOne(
          { count: { $exists: true } },
          { 
            $inc: { total_installs: 1 },
            $set: { last_installed: new Date() }
          },
          { upsert: false }
        );
      }
      
      return res.status(201).json(newVisitor);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Database error in visitors.js:', error);
    
    // Return a more informative error response
    if (error.message.includes('MongoDB')) {
      return res.status(503).json({ 
        error: 'Database service unavailable',
        message: 'Unable to connect to database. Please try again later.'
      });
    }
    
    return res.status(500).json({ 
      error: 'Internal Server Error',
      message: 'An unexpected error occurred while processing your request.'
    });
  }
};
