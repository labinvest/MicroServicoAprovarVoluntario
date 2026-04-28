const voluntarioRepository = require('../repository/voluntario-repository');

const criarVoluntario = async (voluntario) => {
    return await voluntarioRepository.criarVoluntario(voluntario);
};

const aprovarVoluntario = async (id) => {
    return await voluntarioRepository.aprovarVoluntario(id);
};

module.exports = { criarVoluntario, aprovarVoluntario };
