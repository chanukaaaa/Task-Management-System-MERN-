const User = require('../models/userModel');

// Get all users (Admin only)
const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

// Get a specific user
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { getAllUsers, getUserById };
