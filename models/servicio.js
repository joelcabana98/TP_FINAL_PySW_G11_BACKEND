const mongoose = require('mongoose');
const Afiliado = require('./afiliado');
const { Schema } = mongoose;

const ServicioSchema = new Schema({
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    activo: { type: Boolean, required: true },
    descripcion: { type: String, required: true },
    afiliadosInsc: [{
        type: Schema.Types.ObjectId, ref: Afiliado
    }]
})

module.exports = mongoose.model('Servicio', ServicioSchema);