const express = require('express');
const voluntarioController = require('../controllers/voluntario-controller');

const router = express.Router();

router.patch('/aprovar/:id', voluntarioController.aprovarVoluntario);

module.exports = router;
