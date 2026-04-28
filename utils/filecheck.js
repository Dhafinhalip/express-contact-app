const fs = require("fs");

//Folder and JSON File Checking
function checkFolder() {
  const folderPath = "../data";
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}

function checkJsonFile() {
  const jsonFilePath = "../data/contacts.json";
  if (!fs.existsSync(jsonFilePath)) {
    fs.writeFileSync(jsonFilePath, "[]", "utf-8");
  }
}
