const mongoose = require('mongoose');
const Afiliado = require("./afiliado");

const {Schema} = mongoose;

const PagoSchema = new Schema({
    fecha: {type: Date, required: true},
    monto: {type: Number, required: true},
    anio: {type: Number, required: true},
    mes: {type: Number, required: true},
    afiliado: {type: Schema.Types.ObjectId, ref: Afiliado}
})

module.exports = mongoose.model('Pago', PagoSchema);