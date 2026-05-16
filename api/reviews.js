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
    console.error('MongoDB connection failed for reviews:', error);
    throw error;
  }
}

module.exports = async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('reviews');

    if (req.method === 'GET') {
      const reviews = await collection
        .find({})
        .sort({ timestamp: -1 })
        .limit(100)
        .toArray();
      
      return res.status(200).json(reviews);
    } 
    
    if (req.method === 'POST') {
      const { name, rating, text } = req.body;
      
      if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'Name is required' });
      }
      
      if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ error: 'Valid rating (1-5) is required' });
      }

      if (!text || text.trim() === '') {
        return res.status(400).json({ error: 'Review text is required' });
      }

      const ip = req.headers['x-forwarded-for'] || 
                 req.headers['x-real-ip'] || 
                 req.connection?.remoteAddress || 
                 req.socket?.remoteAddress || 
                 'unknown';
      
      const newReview = {
        name: name.trim(),
        rating: Number(rating),
        text: text.trim(),
        ip: ip,
        timestamp: new Date(),
        user_agent: req.headers['user-agent'] || 'unknown',
        status: 'pending' // can be used later to approve/reject
      };

      await collection.insertOne(newReview);
      
      return res.status(201).json(newReview);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Database error in reviews.js:', error);
    
    return res.status(500).json({ 
      error: 'Internal Server Error',
      message: 'An unexpected error occurred while processing your request.'
    });
  }
};
