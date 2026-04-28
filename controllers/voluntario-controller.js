const voluntarioService = require('../services/voluntario-services');

const criarVoluntario = async (req, res) => {
    try {
        const voluntario = await voluntarioService.criarVoluntario(req.body);
        return res.status(201).json(voluntario);
    } catch (error) {
        return res.status(400).json({ erro: error.message });
    }
};

const aprovarVoluntario = async (req, res) => {
    try {
        const id = req.params.id;
        const voluntario = await voluntarioService.aprovarVoluntario(id);
        return res.status(200).json(voluntario);
    } catch (error) {
        return res.status(404).json({ erro: error.message });
    }
};

module.exports = { criarVoluntario, aprovarVoluntario };
