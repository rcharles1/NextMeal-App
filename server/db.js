const { MongoClient } = require('mongodb');

let dbConnection;
let uri = "mongodb://robincharles940:H2SO4@ac-9y5lkev-shard-00-00.rhsiwft.mongodb.net:27017,ac-9y5lkev-shard-00-01.rhsiwft.mongodb.net:27017,ac-9y5lkev-shard-00-02.rhsiwft.mongodb.net:27017/?ssl=true&replicaSet=atlas-13lkul-shard-0&authSource=admin&retryWrites=true&w=majority&appName=next-meal-db"
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb();
            })
            .catch(err => {
                console.log(err);
                return cb(err)
            })
    },
    getDb: () => dbConnection 
}