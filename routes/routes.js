const express = require("express");
const router = express.Router();

//import controller
const contactController = require("../controller/contactController");

//1. route menampilkan halaman index
router.get("/", contactController.index);

//2. route menampilkan halaman form tambah kontak
router.get("/add", contactController.addForm);

//3. route untuk memproses data dari form
router.post("/", contactController.store);
javascript;

//4. route untuk menghapus kontak
router.post("/delete", contactController.destroy);

module.exports = router;
