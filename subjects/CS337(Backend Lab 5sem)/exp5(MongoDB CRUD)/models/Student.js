// models/Student.js
const mongoose = require("mongoose");

// Define schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String, required: true },
  year: { type: Number, required: true }
});

// Create model
module.exports = mongoose.model("Student", studentSchema);
