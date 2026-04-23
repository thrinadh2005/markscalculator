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
      
      // Get IP address for filtering
      const ip = req.headers['x-forwarded-for'] || 
                 req.headers['x-real-ip'] || 
                 req.connection?.remoteAddress || 
                 req.socket?.remoteAddress || 
                 'unknown';
      
      const visitors = await collection
        .find({})
        .sort({ timestamp: -1 })
        .limit(100)
        .toArray();
      
      console.log(`Found ${visitors.length} visitors`);
      return res.status(200).json(visitors);
    } 
    
    if (req.method === 'POST') {
      const { name, date } = req.body;
      
      if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required' });
      }

      // Get IP address
      const ip = req.headers['x-forwarded-for'] || 
                 req.headers['x-real-ip'] || 
                 req.connection?.remoteAddress || 
                 req.socket?.remoteAddress || 
                 'unknown';
      
      const newVisitor = {
        name: name.trim(),
        date: date || new Date().toLocaleString(),
        ip: ip,
        timestamp: new Date(),
        user_agent: req.headers['user-agent'] || 'unknown'
      };

      console.log(`Adding visitor: ${name} from IP: ${ip}`);
      
      await collection.insertOne(newVisitor);
      console.log('Visitor added successfully');
      
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
