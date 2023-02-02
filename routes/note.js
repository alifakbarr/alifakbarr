const router = require("express").Router()

const { route } = require(".")
const noteController = require("../controllers/noteController")

// endpoint
router.get("/", noteController.viewNote)
router.get("/create", noteController.createNote)
router.post("/store", noteController.addNote)
router.get("/detail/:id", noteController.detailNote)
router.get("/edit/:id",noteController.editNote)
router.post("/update/:id", noteController.updateNote)
router.get("/delete/:id", noteController.deleteNote)
router.post("/search", noteController.searchNote)

// export routernya
module.exports = router