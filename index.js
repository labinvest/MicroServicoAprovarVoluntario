require('dotenv').config();

const express = require('express');
const voluntarioRouter = require('./routes/voluntario-route');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/voluntario', voluntarioRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
