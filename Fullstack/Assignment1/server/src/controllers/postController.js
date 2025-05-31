const Post = require('../models/post.js');

// Get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { post } = req.body;
    if (!post || !post.trim()) {
      return res.status(400).json({ error: 'Post content required.' });
    }
    const newPost = new Post({ post });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};