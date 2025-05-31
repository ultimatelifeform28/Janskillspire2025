const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUserById } = require('../controllers/userController');

// GET all users
router.get('/api/users', getUsers);

// POST create user
router.post('/api/users', createUser);

// GET user by ID
router.get('/api/users/:id', getUserById);

module.exports = router;
