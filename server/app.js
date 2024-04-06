const express = require('express');
const mongoose =  require('mongoose');
 
const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const uri = "mongodb://robincharles:test12345@ac-cqclbqo-shard-00-00.jtvk55q.mongodb.net:27017,ac-cqclbqo-shard-00-01.jtvk55q.mongodb.net:27017,ac-cqclbqo-shard-00-02.jtvk55q.mongodb.net:27017/?ssl=true&replicaSet=atlas-yk52uf-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const postSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Post = mongoose.model('Post', postSchema);

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content:req.body.content
  });
  const result = await post.save();
  res.send(result);
});

