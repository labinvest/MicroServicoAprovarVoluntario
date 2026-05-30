require('dotenv').config();

const express = require('express');
const voluntarioRouter = require('../routes/voluntario-route');

const app = express();

app.use(express.json());
app.use('/api/voluntario', voluntarioRouter);

module.exports = app;
