const students = require("../students");

const getStudents = (req, res) => {
  res.json({ data: students });
};

const createStudents = (req, res) => {
  const name = req.body.name;

  const newStudents = [...students, { id: students.length + 1, name: name }];

  res.json({ message: "Method POST worked", data: newStudents });
};

const editStudent = (req, res) => {
  const id = req.params.id;
  const name = req.body.name;

  const student = students.find((student) => {
    return student.id === Number(id);
  });

  student.name = name;

  res.json({ message: "Edited!", data: student });
};

const deleteStudent = (req, res) => {
  const id = req.params.id;

  const studentsWithoutDeleted = students.filter((student) => {
    return student.id !== Number(id);
  });

  res.json({ message: "Deleted!", data: studentsWithoutDeleted });
};

module.exports = { getStudents, createStudents, editStudent, deleteStudent };
