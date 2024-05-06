const express = require("express");
const router = express.Router();
const User = require('../models/user.model');

// Get all users
router.get("/user", async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a user by ID
router.get("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new user
router.post("/user", async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a user by ID
router.put("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await User.update(req.body, { where: { id } });
        if (!updated) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        const updatedUser = await User.findByPk(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a user by ID
router.delete("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({ where: { id } });
        if (!deleted) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
