const voluntarios = [
    {
        id: 1,
        aprovado: false
    },
    {
        id: 2,
        aprovado: false
    }
];


export const criarVoluntario = async (voluntario) =>{
    voluntarios.push(voluntario);
}

export const aprovarVoluntario = async (id) =>{
    const index = voluntarios.findIndex(p => p.id == id);
    voluntarios[index].aprovado = true;
    return voluntarios[index];
}