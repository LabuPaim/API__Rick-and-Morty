const router = require('express').Router();

const swagger__Ui = require('swagger-ui-express');
const swagger__DOCUMENT = require('./swagger.json');

router.use('/', swagger__Ui.serve);
router.get('/', swagger__Ui.setup(swagger__DOCUMENT));

module.exports = router;
