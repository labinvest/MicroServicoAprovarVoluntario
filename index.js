const express = require('express');
const voluntarioRouter = require('./routes/voluntario-route')
const app = express();
const PORT = env.PORT;

app.use(express.json());

app.use("/api/voluntario",voluntarioRouter);

app.listen(PORT, () => {
    console.log("Servidor rodando");
});

