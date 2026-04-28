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

const express = require("express");
const app = express();
const port = 3000;

// 1. Import Rute Anda
const contactRoutes = require("./routes/routes"); // Sesuaikan path-nya
const { checkFolder, checkJsonFile } = require("./utils/fileCheck");

// 2. Jalankan Pengecekan File (Utils)
checkFolder();
checkJsonFile();

// 3. Setup View Engine (EJS)
app.set("view engine", "ejs");

// 4. Setup Middleware (Wajib agar req.body tidak undefined)
app.use(express.urlencoded({ extended: true }));

// 5. Hubungkan Rute
// Karena Anda ingin daftar kontak jadi root, gunakan '/'
app.use("/", contactRoutes);

// 6. Jalankan Server
app.listen(port, () => {
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});

//4. route untuk menghapus kontak
router.post("/delete", contactController.destroy);
