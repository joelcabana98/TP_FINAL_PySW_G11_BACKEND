const Novedad = require('../models/novedad');

const novedadCtrl = {}

novedadCtrl.getNovedades = async(req, res) => {
    novedades = await Novedad.find().populate("usuario");
    res.json(novedades);
}

novedadCtrl.createNovedad = async (req, res) => {
    const novedad = new Novedad (req.body);
    await novedad.save();
    res.json({
        'status': 'Novedad saved'
    });
}

novedadCtrl.getNovedadById = async(req, res) => {
    const novedad = await Novedad.findById(req.params.id).populate("usuario");
    res.json(novedad);
}

novedadCtrl.getNovedadesByFecha = async(req, res) => {
    novedades = await Novedad.find({
        "fecha": { "$gte": req.body.fechaDesde, "$lt": req.body.fechaHasta }
    });
    res.json(novedades);
}

novedadCtrl.editNovedad = async(req, res) => {
    const vNovedad = new Novedad(req.body);
    await Novedad.findByIdAndUpdate(req.params.id, {$set: vNovedad}, {new: true});
    res.json({
        'status': 'Novedad updated'
    })
}

novedadCtrl.deleteNovedad = async(req, res) => {
    await Novedad.findByIdAndRemove(req.params.id)
    res.json({
        'status': 'Novedad removed'
    })
}

module.exports= novedadCtrl;