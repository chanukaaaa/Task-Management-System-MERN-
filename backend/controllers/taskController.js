const Task = require('../models/taskModel');
const User = require('../models/userModel');

// Create a new task
const createTask = async (req, res) => {
  const { title, description, assignedTo } = req.body;

  const user = await User.findById(assignedTo);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const task = await Task.create({
    title,
    description,
    assignedTo: user._id,
    createdBy: req.user._id,
  });

  res.status(201).json(task);
};

// Update task status
const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  task.status = status;
  await task.save();

  res.json(task);
};

module.exports = { createTask, updateTaskStatus };
