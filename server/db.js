const { MongoClient } = require('mongodb');

const uri = "mongodb://robincharles:test12345@cluster0.jtvk55q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
