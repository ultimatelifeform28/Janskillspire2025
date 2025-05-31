const express = require('express');
const router = express.Router();
const { getPosts, createPost } = require('../controllers/postController.js');

router.get('/api/posts', getPosts);
router.post('/api/posts', createPost);

module.exports = router;