//Inisialisasi Express
const express = require("express");
const app = express();
const PORT = 3000;

//Inisialisasi Routes dan utils
const contactRoutes = require("./routes/routes");
const { checkFolder, checkJsonFile } = require("./utils/filecheck");

//Check Folder dan File
checkFolder();
checkJsonFile();

//Setup EJS
app.set("view engine", "ejs");

//SET BODY PARSER
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//SET STATIC FOLDER
app.use(express.static("public"));

//Connect Route
app.use("/", contactRoutes);

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}/`);
});
