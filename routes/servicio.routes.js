// Creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

// Defino controlador para el manejo de CRUD
const servicioCtrl = require('../controllers/servicio.controller');
const autCtrl = require('./../controllers/auth.controller');
// Definiendo rutas
router.get('/', servicioCtrl.getServicios);
router.post('/', autCtrl.verifyTokenAdmins, servicioCtrl.createServicio);
router.get('/:id', servicioCtrl.getServicio);
router.put('/:id', autCtrl.verifyTokenAdmins, servicioCtrl.editServicio);
router.delete('/:id', autCtrl.verifyTokenAdmins, servicioCtrl.deleteServicio);

// Exportacion del modulo de rutas
module.exports = router;