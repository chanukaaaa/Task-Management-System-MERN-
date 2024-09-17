const express = require('express');
const { createTask, updateTaskStatus } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

router.post('/', protect, roleMiddleware(['Admin', 'Manager']), createTask);
router.put('/:id/status', protect, roleMiddleware(['Employee']), updateTaskStatus);

module.exports = router;
