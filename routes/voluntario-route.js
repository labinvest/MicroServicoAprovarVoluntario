const express = require('express');
const voluntarioController = require('../controllers/voluntario-controller');

const router = express.Router();

router.post('/', voluntarioController.criarVoluntario);
router.patch('/aprovar/:id', voluntarioController.aprovarVoluntario);

module.exports = router;
