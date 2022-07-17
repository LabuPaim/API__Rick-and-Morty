const router = require("express").Router();
const controller__AUTH = require("./auth.controller");

router.post("/login", controller__AUTH.controller__LOGIN);

module.exports = router;
