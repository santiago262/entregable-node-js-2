// Import necessary modules
const express = require('express');
const morgan = require('morgan');

// Import router
const router = require("../router/user.router");

// Initialize express app
const app = express();

// Middleware setup
app.use(morgan("dev")); // Logging middleware for development environment


// Route definitions
app.get("/", (req, res) => {
    res.send('This is express');
});
app.use(express.json())
// Router setup
app.use("/users/v1", router);

// Export the configured express app
module.exports = app;
