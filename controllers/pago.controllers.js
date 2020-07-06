const Pago = require('../models/pago');

const pagoCtrl = {}

//Listar todos pagos
pagoCtrl.getPagos = async (req, res) => {
    pagos = await Pago.find().populate("afiliado");
    res.json(pagos);
}

//Alta de un pago
pagoCtrl.createPago = async (req, res) => {
    const pago = new Pago(req.body);
    await pago.save();
    res.json({
        'status': 'Pago saved'
    });
}

//Devolver un pago
pagoCtrl.getPago = async (req, res) => {
    const pago = await Pago.findById(req.params.id).populate("afiliado");
    res.json(pago);
}

//modificar Pago
pagoCtrl.editPago = async(req, res) => {
    const vPago = new Pago(req.body);
    await Pago.findByIdAndUpdate(req.params.id, {$set: vPago}, {new: true});
    res.json({
        'status': 'Pago updated'
    })
}

//Eliminar Pago
pagoCtrl.deletePago = async(req, res) => {
    await Pago.findByIdAndRemove(req.params.id)
    res.json({
        'status': 'Pago removed'
    })
}

//Buscar pagos por rango de fecha
//Se requiera { "fechaInicio": "una fecha", "fechaFin": "una fecha"}
pagoCtrl.getPagosByDate = async(req, res) => {
    pagos = await Pago.find({ fecha: { $gte: req.body.fechaInicio, $lte: req.body.fechaFin } }).sort({ fecha: 1 }).populate("afiliado");
    res.json(pagos);
}

//Busca los pagos por id de afiliado mandar la id asi "_id":"asdasd"
pagoCtrl.getPagosByAfiliado = async(req, res) => {
    pagos = await Pago.find( { afiliado: req.body._id } );
    res.json(pagos);
}

module.exports = pagoCtrl;