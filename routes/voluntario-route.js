const express = require('express');
const voluntarioController = require('../controllers/voluntario-controller');

const router = express.Router();

router.post("/aprovar/:id", voluntarioController.criarVoluntario);
