const { MongoClient, ServerApiVersion } = require('mongodb');

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Connection URI from environment variable or provided fallback
  const uri = process.env.MONGODB_URI || "mongodb+srv://venkatathrinadh05_db_user:eny5QSaY52ufes1G@marks.kzmlscn.mongodb.net/?appName=marks";

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  await client.connect();
  const db = client.db('marks'); // Use 'marks' database

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
