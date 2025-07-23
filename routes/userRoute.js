const express = require('express');
const {getAllUsers, getUserById, getCurrentUser} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Protected routes - all require authentication
router.get('/', authMiddleware, getAllUsers);           // GET /api/users - Get all users
router.get('/me', authMiddleware, getCurrentUser);      // GET /api/users/me - Get current user
router.get('/:id', authMiddleware, getUserById);        // GET /api/users/:id - Get user by ID

module.exports = router;
