// Experiment 4: RESTful API using Express.js (GET Request)
// Author: Mohd Bashar Azaz
// Date: 17 Oct 2025

const express = require("express");
const app = express();

// Enable JSON parsing middleware
app.use(express.json());

// Sample dataset (mock data)
const students = [
  { id: 1, name: "Amit", course: "B.Tech CSE", year: 3 },
  { id: 2, name: "Bashar", course: "B.Tech CSE", year: 3 },
  { id: 3, name: "Priya", course: "B.Tech IT", year: 2 },
];

// Root route - basic info
app.get("/", (req, res) => {
  res.send("RESTful API Server is running. Use /api/students to fetch data.");
});

// GET endpoint to fetch all students
app.get("/api/students", (req, res) => {
  res.status(200).json({
    success: true,
    count: students.length,
    data: students,
  });
});

// GET endpoint to fetch a single student by ID
app.get("/api/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({ success: false, message: "Student not found" });
  }

  res.status(200).json({ success: true, data: student });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
