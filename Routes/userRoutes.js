const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/userControllers')

router.post('/validateuser', controllers.validate)
router.post('/sanitizeuser', controllers.sanitize)
module.exports = router