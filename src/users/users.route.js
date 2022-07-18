const router = require('express').Router();
const user__CONTROLLER = require('./users.controller');

router.post('/create', user__CONTROLLER.controller__create_USER);
router.get('/', user__CONTROLLER.controller__all_USER);
router.get('/:id', user__CONTROLLER.controller__byid_USER);
router.put('/update/:id', user__CONTROLLER.controller__update_USER);
router.delete('/delete/:id', user__CONTROLLER.controller__delete_USER);

module.exports = router;
