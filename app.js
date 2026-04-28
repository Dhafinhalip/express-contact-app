//Inisialisasi Express
const express = require("express");
const app = express();
const PORT = 3000;

//Setup EJS
app.set("view engine", "ejs");

//SET BODY PARSER
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//SET STATIC FOLDER
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Selamat Datang Di Contact App Project");
});

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}/`);
});
