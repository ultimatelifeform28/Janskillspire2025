const express = require('express')
const router = express.Router()
// Import controller functions for registration and login
const { addRegister, addLogin, addPost, getAllPosts } = require('../controllers/RegistrationFormcontroller.js')

// Route for user registration
router.post('/Registration', addRegister)

// Route for user login
router.post('/Login', addLogin)

// Routes for Posts
// Route to add a new post
router.post("/posts", addPost)
// Route to get all posts
router.get("/posts", getAllPosts)

module.exports = router // Export the router to be used in the main server file