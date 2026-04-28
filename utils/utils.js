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

//Helper Function

//Get All The Contacts

function loadContact() {
  const fileBuffer = fs.readFileSync("../data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
}

function getAllContacts() {
  const contacts = loadContact();
  return contacts.forEach((item) => item);
}

function getContactByPhoneNumber(noHP) {
  const contacts = loadContact();
  const contact = contacts.find((item) => {
    item.noHP === noHP;
  });
  return contact;
}

function addContacts(nama, email, noHP) {
  const contacts = loadContact();
  const contact = { nama, email, noHP };
  contacts.push(contact);

  fs.writeFileSync("../data/contacts.json", JSON.stringify(contacts));
}

function deleteContactByPhoneNumber(noHP) {
  const contacts = loadContact();
  const filterContacts = contacts.filter((item) => item.noHP !== noHP);

  fs.writeFileSync("../data/contacts.json", JSON.stringify(filterContacts));
}
