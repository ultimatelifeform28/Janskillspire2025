const { User, Post } = require('../models/user');

// ======================
// Register New User
// ======================
const addRegister = async (req, res) => {
    const { firstName, lastName, email, password } = req.body; // Get user details from request

    console.log('Backend received:', req.body);
    const newUser = new User({ firstName, lastName, email, password }); // Create new user instance
    console.log("Request new User", req.body); // Debug log

    // Validate first and last name (must be at least 2 characters)
    if (firstName.length < 2) {
        return res.status(400).json({ msg: "First name must be at least 2 characters." });
    }
    if (lastName.length < 2) {
        return res.status(400).json({ msg: "Last name must be at least 2 characters." });
    }

    try {
        await newUser.save(); // Save user to database
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error registering user" });
    }
}

// ======================
// Login Existing User
// ======================
const addLogin = async (req, res) => {
    const { email, password } = req.body; // Get credentials from request

    console.log('Backend received:', req.body);
    try {
        const user = await User.find({ email, password }); // Find user in database
        if (user.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ error: "Error logging in" });
    }
}

// ======================
// Add Post
// ======================
const addPost = async (req, res) => {
    const { author, content } = req.body; // Get post details from request

    console.log('Backend received:', req.body);
    const newPost = new Post({ author, content }); // Create new post instance
    console.log("Request new Post", req.body); // Debug log

    try {
        await newPost.save(); // Save post to database
        res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error creating post" });
    }
}

// ======================
// Get All Posts
// ======================
const getAllPosts = async (req, res) => {
    console.log('Backend received:', req.body);
    try {
        const posts = await Post.find(); // Fetch all posts
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: "Error fetching posts" });
    }
}

module.exports = {
    addRegister,
    addLogin,
    addPost,
    getAllPosts
}