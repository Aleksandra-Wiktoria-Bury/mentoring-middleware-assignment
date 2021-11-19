const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/userControllers');

//* ------- VALIDATORS
const doesExist = require('../Middleware/doesExisit');
const is18 = require('../Middleware/is18');
const isFbw = require('../Middleware/isFbw');

const validate = [doesExist, is18, isFbw];
//* ------- end of validators


router.post('/validateuser', validate, controllers.validate)
router.post('/sanitizeuser', controllers.sanitize)
module.exports = router