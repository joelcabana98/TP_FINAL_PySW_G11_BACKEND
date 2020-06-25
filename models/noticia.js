const mongoose = require('mongoose');
const usuario = require('./usuario');
const { Schema } = mongoose;

const noticiaSchema = new Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha: { type: Date, required: true },
    vigente: { type: Boolean, required: true },
    imagen: { type: String, required: true },
    usuario: { type: Schema.Types.ObjectId, ref: usuario },
})

module.exports = mongoose.model('Noticia', noticiaSchema);