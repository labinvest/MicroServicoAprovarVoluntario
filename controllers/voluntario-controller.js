const voluntarioService = require("../services/voluntario-services")

export const criarVoluntario = async (req,res) =>{
    const voluntario = await voluntarioService.criarVoluntario(req.body);
    return res.status(201).send(voluntario);
}

export const aprovarVoluntario = async (req,res) =>{
    const id = req.params.id;
    var voluntario = await voluntarioService.aprovarVoluntario(id);

    return res.status(200).send(voluntario);
}