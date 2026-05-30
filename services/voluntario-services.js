const voluntarioRepository = require('../repository/voluntario-repository');

const aprovarVoluntario = async (solicitacaoId, adminUserId) => {
    return voluntarioRepository.aprovarVoluntario(solicitacaoId, adminUserId);
};

module.exports = { aprovarVoluntario };
