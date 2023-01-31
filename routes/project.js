const router = require("express").Router()

const {route} = require(".")
const projectController = require("../controllers/projectController")

// endpoint
router.get("/", projectController.viewProject)

// export
module.exports = router