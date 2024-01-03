const router = require("express").Router();
const urlController = require("../controllers/urlController")

router
.route("/urls")
.post((req,res) => urlController.create(req,res));

router.route("/urls/:id")
.get((req,res) => urlController.get(req,res));

module.exports = router;