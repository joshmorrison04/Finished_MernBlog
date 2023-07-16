import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      alert('Error fetching blog posts');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/posts', { title, author, content });
      setTitle('');
      setAuthor('');
      setContent('');
      alert('Blog post saved successfully');
      fetchPosts();
    } catch (error) {
      console.error('Error saving blog post:', error);
      alert('Error saving blog post');
    }
  };

  return (
    <div className="App">

      <h1>Create a Blog Post</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
          <label htmlFor="author">Author: </label>
          <input type="text" id="author" value={author} onChange={e => setAuthor(e.target.value)} />
          <label htmlFor="content">Content:</label>
          <textarea id="content" value={content} onChange={e => setContent(e.target.value)}></textarea>
          <button type="submit">Save</button>
        </form>
      </div>

      <br></br>
      <br></br>
      <h1>User Posts</h1>
      <div className="blog-post-container">
        {posts.map(post => (
          <div className="blog-post" key={post._id}>
            <h3>{post.title}</h3>
            <p>Author: {post.author}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App; 



