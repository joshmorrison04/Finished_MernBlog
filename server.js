/*const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connect
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectionString = 'mongodb+srv://joshuamorrisonwg:nr3UAr33YlWeM1Rf@cluster2.jjeeh1c.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, connectionOptions)
  .connect(connectionString, connectionOptions)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Schema and model
const blogPostSchema = new mongoose.Schema({
  title: String,
  author: {
    type: String,
    required: true,
  },
  content: String,
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// Routes
app.get('/api/posts', (req, res) => {
    BlogPost.find()
      .then((posts) => res.json(posts))
      .catch((err) => res.status(500).json({ error: 'Error fetching blog posts' }));
  });

app.post('/api/posts', (req, res) => {
  const { title, author, content } = req.body;
  const newPost = new BlogPost({ title, author, content });
  newPost.save()
    .then(() => res.json({ message: 'Blog post saved successfully' }))
    .catch(err => res.status(500).json({ error: 'Error saving blog post' }));
}); 

app.listen(4000, () => {
  console.log('Server listening on port 4000');
}); */

//nr3UAr33YlWeM1Rf
//joshuamorrisonwg
//mongodb+srv://joshuamorrisonwg:nr3UAr33YlWeM1Rf@cluster2.jjeeh1c.mongodb.net/?retryWrites=true&w=majority


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connect
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectionString = 'mongodb+srv://joshuamorrisonwg:nr3UAr33YlWeM1Rf@cluster2.jjeeh1c.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, connectionOptions)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Schema and model
const blogPostSchema = new mongoose.Schema({
  title: String,
  author: {
    type: String,
    required: true,
  },
  content: String,
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// Routes
app.get('/api/posts', (req, res) => {
  BlogPost.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(500).json({ error: 'Error fetching blog posts' }));
});

app.post('/api/posts', (req, res) => {
  const { title, author, content } = req.body;
  const newPost = new BlogPost({ title, author, content });
  newPost.save()
    .then(() => res.json({ message: 'Blog post saved successfully' }))
    .catch(err => res.status(500).json({ error: 'Error saving blog post' }));
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});

