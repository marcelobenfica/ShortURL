const router = require("express").Router();

const shortURL = require("./url")
router.use("/",shortURL)

module.exports = router;