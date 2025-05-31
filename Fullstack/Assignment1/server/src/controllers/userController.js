const User = require('../models/user.js');

// Get all users from the database, sorted by creation date (newest first)
exports.getUsers = async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.json(users);
};

// Create a new user in the database
exports.createUser = async (req, res) => {
  const { name, height, weight, dietary } = req.body;
  const user = new User({ name, height, weight, dietary });
  await user.save();
  res.status(201).json(user);
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

