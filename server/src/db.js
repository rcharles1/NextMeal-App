import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('Missing MONGODB_URI');

const clientOptions = {
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 30000,
  retryWrites: true,
  appName: 'next-meal-db'
};

let client;
let isConnected = false;

export const connectToDb = async () => {
  if (isConnected) return client;
  try {
    client = new MongoClient(uri, clientOptions);
    await client.connect();
    isConnected = true;
    console.log('Connected to MongoDB');
    return client;
  } catch (error) {
    console.error('Connection failed:', error);
    throw error;
  }
};