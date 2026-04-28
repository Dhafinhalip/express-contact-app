const fs = require("fs");
const filePath = "../data/contacts.json";

//Load
function loadContact() {
  const fileBuffer = fs.readFileSync(filePath, "utf-8");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
}

//Save
function saveContact(contacts) {
  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
}

//Get All The Contacts
function getAllContacts() {
  const contacts = loadContact();
  return contacts;
}

//get Contact By Phone Number
function getContactByPhoneNumber(noHP) {
  const contacts = loadContact();
  const contact = contacts.find((item) => {
    item.noHP === noHP;
  });
  return contact;
}

//Add Contact
function addContacts(nama, email, noHP) {
  const contacts = loadContact();
  const contact = { nama, email, noHP };
  contacts.push(contact);

  saveContact(contacts);
}

//Delete Contact
function deleteContactByPhoneNumber(noHP) {
  const contacts = loadContact();
  const filterContacts = contacts.filter((item) => item.noHP !== noHP);

  saveContact(filterContacts);
}

module.exports = {
  getAllContacts,
  getContactByPhoneNumber,
  addContacts,
  deleteContactByPhoneNumber,
};
