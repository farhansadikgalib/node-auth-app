const User = require('../models/User');

// Get all users (protected route)
exports.getAllUsers = async (req, res) => {
    try {
        // Get all users but exclude password field
        const users = await User.find({}).select('-password');

        res.status(200).json({
            message: "Users retrieved successfully",
            count: users.length,
            users: users
        });
    } catch (err) {
        res.status(500).json({
            message: "Server Error",
            error: err.message
        });
    }
};

// Get user by ID (protected route)
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User retrieved successfully",
            user: user
        });
    } catch (err) {
        res.status(500).json({
            message: "Server Error",
            error: err.message
        });
    }
};

// Get current user profile (protected route)
exports.getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "Current user retrieved successfully",
            user: user
        });
    } catch (err) {
        res.status(500).json({
            message: "Server Error",
            error: err.message
        });
    }
};