const router = require('express').Router();
const user__CONTROLLER = require('./users.controller');

router.post("/create_users", user__CONTROLLER.controller__CREATE_USER);
router.get("/all_users", user__CONTROLLER.controller__ALL_USER);

module.exports = router;
