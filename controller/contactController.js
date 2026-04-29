const models = require("../models/contacts");

const index = (req, res) => {
  const contacts = models.getAllContacts();
  res.render("index", { contacts, getInitial: models.initialName });
};

//Memproses Data dari Form (POST)
const store = (req, res) => {
  const { nama, email, noHP } = req.body;

  models.addContacts(nama, email, noHP);
  res.redirect("/");
};

//Menghapus Data
const destroy = (req, res) => {
  const noHP = req.body.noHP;
  models.deleteContactByPhoneNumber(noHP);
  res.redirect("/");
};

module.exports = { index, store, destroy };
