const prisma = require('../db');

const criarVoluntario = async (voluntario) => {
    return await prisma.voluntario.create({ data: voluntario });
};

const aprovarVoluntario = async (id) => {
    return await prisma.voluntario.update({
        where: { id: Number(id) },
        data: { status: 'aprovado' },
    });
};

const buscarVoluntarioPorId = async (id) => {
    return await prisma.voluntario.findUnique({
        where: { id: Number(id) },
    });
};

module.exports = { criarVoluntario, aprovarVoluntario, buscarVoluntarioPorId };
