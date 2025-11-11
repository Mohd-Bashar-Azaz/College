// Experiment 1: File System CRUD using Node.js (Latest Practice 2025)
// Author: Mohd Bashar Azaz
// Date: 17 Oct 2025

import fs from "fs/promises"; // Modern, promise-based FS API
import path from "path";
import { fileURLToPath } from "url";

// Resolve current directory (ESM safe)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File path
const filePath = path.join(__dirname, "data.txt");

// ✅ CREATE — Write data to file
async function createFile() {
  try {
    const content = "Hello from Node.js File System Module!";
    await fs.writeFile(filePath, content, "utf-8");
    console.log("File created successfully!");
  } catch (err) {
    console.error("Error creating file:", err.message);
  }
}

// 📖 READ — Read and display file contents
async function readFile() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log(" File Content:\n", data);
  } catch (err) {
    console.error(" Error reading file:", err.message);
  }
}

// ✏️ UPDATE — Append new data
async function updateFile() {
  try {
    const update = "\nThis line was appended using fs.appendFile().";
    await fs.appendFile(filePath, update, "utf-8");
    console.log("File updated successfully!");
  } catch (err) {
    console.error("Error updating file:", err.message);
  }
}

// ❌ DELETE — Remove file from system
async function deleteFile() {
  try {
    await fs.unlink(filePath);
    console.log("File deleted successfully!");
  } catch (err) {
    console.error("Error deleting file:", err.message);
  }
}

// 🧠 MAIN — Sequentially perform CRUD
async function main() {
  console.log("\n--- FILE SYSTEM CRUD OPERATIONS ---\n");
  await createFile();
  await readFile();
  await updateFile();
  await readFile();
    // await deleteFile();
  console.log("\nAll operations completed successfully!");
}

main();
