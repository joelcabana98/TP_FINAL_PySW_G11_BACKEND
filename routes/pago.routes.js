//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const pagoCtrl = require('./../controllers/pago.controllers');

// definiendo rutas
router.get('/', pagoCtrl.getPagos);
router.post('/', pagoCtrl.createPago);
//router.get('/:id', noticiaCtrl.getNoticia);
//router.put('/:id', noticiaCtrl.editNoticia);
//router.delete('/:id', noticiaCtrl.deleteNoticia);

//exportacion del modulo de rutas
module.exports = router;