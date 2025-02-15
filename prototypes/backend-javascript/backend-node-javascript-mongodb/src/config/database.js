import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'backend_node_javascript';
let db = null;

const connectMongoDB = async () => {
  if (db) {
    console.log("✅ MongoDB déjà connecté.");
    return db; // Empêche une reconnexion inutile
  }

  try {
    const client = new MongoClient(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    db = client.db(dbName);
    console.log(`✅ MongoDB connecté à : ${dbName}`);
  } catch (error) {
    console.error('❌ MongoDB erreur de connexion:', error.message);
    throw new Error("Impossible de se connecter à MongoDB");
  }
};

const getDb = () => {
  if (!db) {
    throw new Error("Database not initialized. Call connectMongoDB() first.");
  }
  return db;
};

export { connectMongoDB, getDb };
