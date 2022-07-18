const router = require('express').Router();
const character__CONTROLLER = require('./characters.controller');

router.post("/create", character__CONTROLLER.controller__create_CHARACTERS);
router.get('/', character__CONTROLLER.controller__all_CHARACTERS);

module.exports = router
