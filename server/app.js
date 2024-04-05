const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = "mongodb://robincharles:test12345@cluster0.jtvk55q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

client.connect(err => {
    if (err) {
        console.log('Failed to connect to MongoDB', err);
        process.exit(1);
    }
    const collection = client.db("test").collection("devices");
  client.close();
});

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
