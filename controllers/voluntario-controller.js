const voluntarioService = require('../services/voluntario-services');

const aprovarVoluntario = async (req, res) => {
    try {
        const { id } = req.params;
        const { adminUserId } = req.body || {};
        const resultado = await voluntarioService.aprovarVoluntario(id, adminUserId);
        return res.status(200).json(resultado);
    } catch (error) {
        const status = error.message === 'Solicitação não encontrada' ? 404 : 400;
        return res.status(status).json({ erro: error.message });
    }
};

module.exports = { aprovarVoluntario };
