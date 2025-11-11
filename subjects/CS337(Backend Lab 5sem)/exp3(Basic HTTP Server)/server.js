// Experiment 3: Basic HTTP Server using Node.js and Express
// Author: Mohd Bashar Azaz
// Date: 17 Oct 2025

const express = require("express");

const app = express();

// Middleware to parse JSON requests (modern standard)
app.use(express.json());

// Root route - handles GET requests
app.get("/", (req, res) => {
  res.send("Welcome! This is a Basic HTTP Server using Node.js & Express.");
});

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
