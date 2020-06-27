const Afiliado = require('../models/afiliado');
const afiliado = require('../models/afiliado');

const afiliadoCtrl = {}

afiliadoCtrl.getAfiliados = async(req, res) => {
    afiliados = await Afiliado.find();
    res.json(afiliados);
}

afiliadoCtrl.createAfiliado = async(req, res) => {
    const afiliado = new Afiliado(req.body);
    await afiliado.save();
    res.json({
        'status':'Afiliado Saved'
    });
}

afiliadoCtrl.getAfiliado = async(req, res) => {
    const afiliado = await Afiliado.findById(req.params.id);
    res.json(afiliado);
}

afiliadoCtrl.editAfiliado = async(req, res) => {
    const vafiliado = new Afiliado(req.body);
    await Afiliado.findByIdAndUpdate(req.params.id, { $set:vafiliado }, { new: true});
    res.json({
        'status':'Afiliado Updated'
    });
}

afiliadoCtrl.deleteAfiliado = async(req, res) => {
    await Afiliado.findByIdAndRemove(req.params.id);
    res.json({
        'status':'Afiliado Removed'
    })
}

afiliadoCtrl.getAfiliadoByEmail = async(req, res) => {
    const criteria = {
        email: req.body.email
    }

    Afiliado.findOne(criteria, function(err, afil){
        if(err){
            res.json({
                status: 0,
                message: 'error'
            })
        }

        if(!afil) {
            res.json({
                status: 0,
                message: "Not Found"
            })
        }
        else{
            res.json({
                status: 1,
                message: "success",
                id: afil._id,
                existe: true
            })
        }
    })
}

module.exports = afiliadoCtrl;