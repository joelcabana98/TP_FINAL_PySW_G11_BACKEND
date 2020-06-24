const Afiliado = require('../models/afiliado');

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

module.exports = afiliadoCtrl;