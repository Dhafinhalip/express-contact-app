const models = require("../models/contacts");

const index = (req, res) => {
  const contacts = models.getAllContacts();
  res.render("index", { contacts });
};

//Menampilkan Halaman Form(GET)
const addForm = (req, res) => {
  res.render("add-contact", { title: "Form Tambah Kontak" });
};

//Memproses Data dari Form (POST)
const store = (req, res) => {
  const { nama, email, noHP } = req.body;

  models.addContacts(nama, email, noHP);

  res.redirect("/contacts");
};

//Menghapus Data
const destroy = () => {
  const noHP = req.body.noHP;
  models.deleteContactByPhoneNumber(noHP);
  res.redirect("/contacts");
};
