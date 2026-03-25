
const voluntarioRepository = require("../repository/voluntario-repository")

export const aprovarVoluntario = async (id) =>{
    return await voluntarioRepository.aprovarVoluntario(id);
}
