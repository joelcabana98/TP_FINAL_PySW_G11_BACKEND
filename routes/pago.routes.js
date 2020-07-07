//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const pagoCtrl = require('./../controllers/pago.controllers');
const autCtrl = require('./../controllers/auth.controller');

// definiendo rutas
router.get('/', autCtrl.verifyTokenAdmins, pagoCtrl.getPagos);
router.post('/', autCtrl.verifyTokenAdmins, pagoCtrl.createPago);
router.get('/:id', autCtrl.verifyTokenAdmins, pagoCtrl.getPago);
router.put('/:id', autCtrl.verifyTokenAdmins, pagoCtrl.editPago);
router.delete('/:id', autCtrl.verifyTokenAdmins, pagoCtrl.deletePago);

//rutas de busqueda
router.post('/buscar/fechas', autCtrl.verifyTokenAdmins, pagoCtrl.getPagosByDate);
router.post('/buscar/afiliado', autCtrl.verifyTokenAdmins, pagoCtrl.getPagosByAfiliado);

//exportacion del modulo de rutas
module.exports = router;