const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.get('/', protect, roleMiddleware(['Admin']), getAllUsers);
router.get('/:id', protect, getUserById);

module.exports = router;
