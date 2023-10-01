const express = require("express");
const studentsRouter = require("./routes/studentsRoutes");
const authRouter = require("./routes/authRoutes");
const app = express();

app.use(express.static("public"));

//HTML Form body parser
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//Routes
app.use(authRouter);
app.use(studentsRouter);

app.listen(8000);
