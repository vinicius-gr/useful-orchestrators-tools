const express = require('express');
const router = express.Router();

const controller = require('../controllers/utilsController');

router.post('/delay', controller.delay);

module.exports = router;