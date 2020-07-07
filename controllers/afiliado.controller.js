const Afiliado = require('../models/afiliado');
const afiliado = require('../models/afiliado');

const afiliadoCtrl = {}

//Lista todos los afiliados de la BD
afiliadoCtrl.getAfiliados = async(req, res) => {
    afiliados = await Afiliado.find();
    res.json(afiliados);
}

//Agrega un afiliado a la BD
afiliadoCtrl.createAfiliado = async(req, res) => {
    const afiliado = new Afiliado(req.body);
    await afiliado.save();
    res.json({
        'status':'Afiliado Saved'
    });
}

//Retorna un afiliado por id
afiliadoCtrl.getAfiliado = async(req, res) => {
    const afiliado = await Afiliado.findById(req.params.id);
    res.json(afiliado);
}

//Edita un afiliado
afiliadoCtrl.editAfiliado = async(req, res) => {
    const vafiliado = new Afiliado(req.body);
    await Afiliado.findByIdAndUpdate(req.params.id, { $set:vafiliado }, { new: true});
    res.json({
        'status':'Afiliado Updated'
    });
}

//Elimina un afiliado
afiliadoCtrl.deleteAfiliado = async(req, res) => {
    await Afiliado.findByIdAndRemove(req.params.id);
    res.json({
        'status':'Afiliado Removed'
    })
}

//Busca un afiliado por su EMAIL
afiliadoCtrl.getAfiliadoByEmail = async(req, res) => {
    //Se recibe un EMAIL como parametro
    const criteria = {
        email: req.body.email
    }
    //Busca una coincidencia
    Afiliado.findOne(criteria, function(err, afil){
        //En caso de error
        if(err){
            res.json({
                status: 0,
                message: 'error'
            })
        }
        //En caso de que no se encuentre un afiliado
        if(!afil) {
            res.json({
                status: 0,
                message: "Not Found"
            })
        }
        else{
        //En caso de que se encuentre una coincidencia
        //Retorna un status 1, la id del afiliado y un booleano existe
            res.json({
                status: 1,
                message: "success",
                id: afil._id,
                existe: true
            })
        }
    })
}

//Busca un afiliado por su DNI
afiliadoCtrl.getAfiliadoByDni = async(req, res) => {

    //Se recibe un numero de dni como parametro
    const criteria = {
        dni: req.body.dni
    }

    //Busca una coincidencia
    Afiliado.findOne(criteria, function(err, afil){
        //En caso de error
        if(err){
            res.json({
                status: 0,
                message: 'error'
            })
        }
        //En caso de que no se encuentre un afiliado
        if(!afil) {
            res.json({
                status: 0,
                message: "Not Found"
            })
        }
        else{
        //En caso de que se encuentre una coincidencia
        //Retorna un status 1 y los datos de afiliado en la variable result    
            res.json({
                status: 1,
                message: "success",
                result: {
                    _id:afil._id,
                    apellido: afil.apellido,
                    nombres: afil.nombres,
                    dni: afil.dni,
                    email: afil.email,
                    imagen: afil.imagen,
                    telefono: afil.telefono
                }
            })
        }
    })
}
module.exports = afiliadoCtrl;