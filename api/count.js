const { MongoClient, ServerApiVersion } = require('mongodb');

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // Prioritize environment variable, then use the specific Atlas URI from today's version
  const mongodbUri = process.env.MONGODB_URI || 
                    process.env.MONGODB_URL || 
                    'mongodb+srv://venkatathrinadh05_db_user:eny5QSaY52ufes1G@marks.kzmlscn.mongodb.net/marks_calculator?retryWrites=true&w=majority';
  
  if (!mongodbUri) {
    throw new Error('MONGODB_URI environment variable is not defined');
  }
  
  console.log('Attempting MongoDB connection for count...');

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
    console.log('MongoDB connected successfully!');
    
    // Use the specific database name 'marks_calculator'
    const db = client.db('marks_calculator');
    cachedClient = client;
    cachedDb = db;
    return { client, db };
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    throw error;
  }
}

module.exports = async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    // Point to the 'visitors' collection which holds the summary document
    const visitorsCollection = db.collection('visitors');
    
    // Get IP address from headers
    const ip = req.headers['x-forwarded-for'] || 
               req.headers['x-real-ip'] || 
               req.connection?.remoteAddress || 
               req.socket?.remoteAddress || 
               'unknown';
    
    console.log(`Processing visit from IP: ${ip}`);
    
    // Fetch the summary document that contains the high count
    let visitorData = await visitorsCollection.findOne({ unique_visitors: { $exists: true } });
    
    if (!visitorData) {
        // If no summary document exists, initialize it with the base count
        console.log('Summary document not found, initializing...');
        visitorData = {
            unique_visitors: 0,
            total_views: 0,
            daily_visitors: {},
            last_updated: new Date()
        };
        await visitorsCollection.insertOne(visitorData);
    }

    const today = new Date().toDateString();
    let isNewVisitor = true;
    
    // Ensure daily_visitors object exists
    if (!visitorData.daily_visitors) visitorData.daily_visitors = {};
    
    // Check if we've seen this IP today
    if (visitorData.daily_visitors[today]) {
        if (visitorData.daily_visitors[today].includes(ip)) {
            isNewVisitor = false;
        } else {
            visitorData.daily_visitors[today].push(ip);
            visitorData.unique_visitors++;
        }
    } else {
        visitorData.daily_visitors[today] = [ip];
        visitorData.unique_visitors++;
    }
    
    // Always increment total views
    visitorData.total_views = (visitorData.total_views || 0) + 1;
    
    // Save updated data back to MongoDB
    await visitorsCollection.updateOne(
        { _id: visitorData._id },
        { 
            $set: {
                unique_visitors: visitorData.unique_visitors,
                total_views: visitorData.total_views,
                daily_visitors: visitorData.daily_visitors,
                last_updated: new Date()
            }
        }
    );
    
    // Restore the "Original" base count of 1024
    const baseCount = 1024;
    const finalCount = baseCount + visitorData.unique_visitors;

    console.log(`Final Display: ${finalCount} (Base ${baseCount} + Unique ${visitorData.unique_visitors})`);

    return res.status(200).json({ 
      count: finalCount,
      unique_visitors: visitorData.unique_visitors,
      total_views: visitorData.total_views,
      is_new_visitor: isNewVisitor
    });

  } catch (error) {
    console.error('Database error in count.js:', error);
    
    // Return a last-resort fallback count if database fails
    return res.status(200).json({ 
      count: 1024, 
      unique_visitors: 0,
      fallback: true,
      error: 'Database connection failed'
    });
  }
};
