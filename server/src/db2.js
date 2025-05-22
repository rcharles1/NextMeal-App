const { MongoClient } = require('mongodb');
require('dotenv').config();
const path = require('path');


const uri = process.env.MONGODB_URI; 
if (!uri) {
  throw new Error('Missing MONGODB_URI in environment');
}

// Verify certificate path exists
const caPath = path.join(__dirname, '../certs/global-bundle.pem');
const fs = require('fs');
if (!fs.existsSync(caPath)) {
  throw new Error(`CA certificate not found at ${caPath}`);
}

const clientOptions = {
  tlsCAFile: caPath,
  serverSelectionTimeoutMS: 10000, 
  tlsAllowInvalidCertificates: true,
  socketTimeoutMS: 30000,            
  maxPoolSize: 10,                   
  minPoolSize: 2,                     
  tls: true,
  replicaSet: 'atlas-13lkul-shard-0',
  retryWrites: true,                 
  appName: 'next-meal-db'            
};

let client;
let isConnected = false;

const connectToDb = async () => {
  if (isConnected) return client;
  
  try {
    client = new MongoClient(uri, clientOptions);
    await client.connect();
    
    // Verify connection
    await client.db().admin().ping();
    isConnected = true;
    
    console.log('Successfully connected to MongoDB Atlas');
    return client;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    await closeConnection();
    throw error;
  }
};

const closeConnection = async () => {
  if (client && isConnected) {
    await client.close();
    isConnected = false;
    console.log('Closed MongoDB connection');
  }
};

// For clean shutdowns
process.on('SIGINT', async () => {
  await closeConnection();
  process.exit(0);
});

module.exports = {
  connectToDb,
  closeConnection,
  getDb: (dbName = 'nextmeal') => {
    if (!isConnected) throw new Error('Database not connected');
    return client.db(dbName);
  }
};