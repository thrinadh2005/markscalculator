const { MongoClient } = require('mongodb');

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db('marks'); // Database name

  cachedClient = client;
  cachedDb = db;
  return { client, db };
}

module.exports = async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('visitors');

    if (req.method === 'GET') {
      const visitors = await collection.find({}).sort({ timestamp: -1 }).limit(100).toArray();
      return res.status(200).json(visitors);
    } 
    
    if (req.method === 'POST') {
      const { name, date } = req.body;
      if (!name) return res.status(400).json({ error: 'Name is required' });

      const newVisitor = {
        name,
        date,
        timestamp: new Date()
      };

      await collection.insertOne(newVisitor);
      return res.status(201).json(newVisitor);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
