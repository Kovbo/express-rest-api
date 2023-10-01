const express = require("express");
const students = require("../students");

const router = express.Router();

router.post("/login", (req, res) => {
  const { name } = req.body;

  const student = students.find((student) => {
    return student.name === name;
  });

  if (student) {
    res.json({ message: "Worked fine", data: student });
  } else {
    res.json({ message: "Sorry, wrong credentials :(" });
  }
});

module.exports = router;
