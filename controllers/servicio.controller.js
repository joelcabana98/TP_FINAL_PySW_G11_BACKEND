const Servicio = require('../models/servicio');

const servicioCtrl = {}

servicioCtrl.getServicios = async(req, res) => {
    servicios = await Servicio.find().populate("afiliadosInsc");
    res.json(servicios);
}

servicioCtrl.createServicio = async (req, res) => {
    const servicio = new Servicio (req.body);
    await servicio.save();
    res.json({
        'status': 'Servicio saved'
    });
}

servicioCtrl.getServicioById = async(req, res) => {
    const servicio = await Servicio.findById(req.params.id).populate("afiliadosInsc");
    res.json(servicio);
}

servicioCtrl.editServicio = async(req, res) => {
    const vServicio = new Servicio(req.body);
    await Servicio.findByIdAndUpdate(req.params.id, {$set: vServicio}, {new: true});
    res.json({
        'status': 'Servicio updated'
    })
}

servicioCtrl.deleteServicio = async(req, res) => {
    await Servicio.findByIdAndRemove(req.params.id)
    res.json({
        'status': 'Servicio removed'
    })
}

module.exports= servicioCtrl;