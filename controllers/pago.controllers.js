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

module.exports = pagoCtrl;