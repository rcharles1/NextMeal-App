const mongoose = require('mongoose');
require('dotenv').config();

let dbConnection;
const uri = import.meta.env.VITE_MONGODB_URI;

module.exports = {
    connectToDb: (cb) => {
        mongoose.connect(uri, 
            {
                ssl: true,
                serverSelectionTimeoutMS: 5000,
            })
            .then((client) => {
                dbConnection = client.connection;
                return cb();
            })
            .catch(err => {
                console.log(err);
                return cb(err);
            });
    },
    getDb: () => dbConnection 
};