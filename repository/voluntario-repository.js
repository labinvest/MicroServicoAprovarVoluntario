const prisma = require('../db');

const aprovarVoluntario = async (solicitacaoId, adminUserId) => {
    return prisma.$transaction(async (tx) => {
        const solicitacao = await tx.solicitacaoVoluntario.findUnique({
            where: { id: Number(solicitacaoId) },
            include: {
                perfil: {
                    include: {
                        user: true,
                        voluntario: true,
                    },
                },
            },
        });

        if (!solicitacao) {
            throw new Error('Solicitação não encontrada');
        }

        if (solicitacao.status === 'APROVADA') {
            throw new Error('Solicitação já aprovada');
        }

        if (!solicitacao.perfil?.user) {
            throw new Error('Usuário associado à solicitação não encontrado');
        }

        let voluntario = solicitacao.perfil.voluntario;
        if (!voluntario) {
            voluntario = await tx.voluntario.create({
                data: {
                    perfilId: solicitacao.perfilId,
                    categoriaId: solicitacao.categoriaId || null,
                    formacao: solicitacao.formacao || null,
                    bio: solicitacao.bio || null,
                    experiencia: solicitacao.experiencia || null,
                    ativo: true,
                },
            });
        } else {
            voluntario = await tx.voluntario.update({
                where: { id: voluntario.id },
                data: {
                    categoriaId: solicitacao.categoriaId || voluntario.categoriaId,
                    formacao: solicitacao.formacao || voluntario.formacao,
                    bio: solicitacao.bio || voluntario.bio,
                    experiencia: solicitacao.experiencia || voluntario.experiencia,
                    ativo: true,
                },
            });
        }

        await tx.user.update({
            where: { id: solicitacao.perfil.userId },
            data: { role: 'VOLUNTARIO' },
        });

        return tx.solicitacaoVoluntario.update({
            where: { id: Number(solicitacaoId) },
            data: {
                status: 'APROVADA',
                aprovadoEm: new Date(),
                aprovadoPorId: adminUserId ? Number(adminUserId) : null,
                observacaoAdmin: null,
            },
            include: {
                perfil: {
                    select: {
                        id: true,
                        nome: true,
                        user: { select: { id: true, role: true } },
                    },
                },
                categoria: { select: { id: true, nome: true } },
            },
        });
    });
};

module.exports = { aprovarVoluntario };
