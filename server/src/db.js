const mongoose = require('mongoose');
require('dotenv').config();

let dbConnection;

const connectToDb = async (cb) => {
  try {
    await mongoose.connect(process.env.VITE_MONGODB_URI, {
      ssl: true,
      serverSelectionTimeoutMS: 5000,
    });
    dbConnection = mongoose.connection;
    console.log('Database connection established');
    cb();
  } catch (error) {
    console.error('Database connection error:', error);
    cb(error);
  }
};

module.exports = { connectToDb };