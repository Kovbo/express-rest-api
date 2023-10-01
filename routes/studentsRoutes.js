const express = require("express");
const students = require("../students");
const {
  getStudents,
  createStudents,
  editStudent,
  deleteStudent,
} = require("../controllers/studentsController");

const router = express.Router();

router.get("/api/students", getStudents);

router.post("/api/students", createStudents);

router.put("/api/students/:id", editStudent);

router.delete("/api/students/:id", deleteStudent);

module.exports = router;
