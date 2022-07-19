const router = require('express').Router();
const character__CONTROLLER = require('./characters.controller');
const auth = require('../auth/auth.middleware');

router.post('/create', auth, character__CONTROLLER.controller__create_CHARACTERS);
router.get('/', character__CONTROLLER.controller__all_CHARACTERS);
router.get('/find/:id', character__CONTROLLER.controller__byid_CHARACTERS);
router.put('/update/:id', character__CONTROLLER.controller__update_CHARACTERS);
router.delete('/delete/:id', character__CONTROLLER.controller__delete_CHARACTERS);
router.get('/search', character__CONTROLLER.controller__byname_CHARACTERS);

module.exports = router;
