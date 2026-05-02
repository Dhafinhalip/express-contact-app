const { body, validationResult } = require("express-validator");
const models = require("../models/contacts");

const index = (req, res) => {
  const contacts = models.getAllContacts();
  res.render("index", { contacts, getInitial: models.initialName });
};

//Validasi Data
const validateContact = [
  body("nama").trim().isLength({ min: 3 }).withMessage("Nama Minimal 3 Huruf"),
  body("email")
    .isEmail()
    .withMessage("Email tidak valid")
    .custom((value) => {
      const contacts = models.getAllContacts();
      const duplikat = contacts.find((item) => item.email === value);
      if (duplikat) {
        throw new error("Email sudah terdaftar");
      }
      return true;
    }),
  body("noHP")
    .isMobilePhone("id-ID")
    .withMessage("Nomor HP Anda Tidak Valid")
    .custom((value) => {
      const contacts = models.getAllContacts();
      const duplikat = contacts.find((item) => item.noHP === value);
      if (duplikat) {
        throw new error("Nomor HP sudah terdaftar");
      }
      return true;
    }),
];
//Memproses Data dari Form (POST)
const store = (req, res) => {
  const error = validationResult(req);

  //Jika ada error
  if (!error.isEmpty()) {
    return res.render("index", {
      contacts: models.getAllContacts(),
      getInitial: models.initialName,
      errors: error.mapped(),
      oldData: req.body,
    });
  }

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

module.exports = { index, store, validateContact, destroy };
