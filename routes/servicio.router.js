// Creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

// Defino controlador para el manejo de CRUD
const servicioCtrl = require('../controllers/servicio.controller');

// Definiendo rutas
router.get('/', servicioCtrl.getServicios);
router.post('/', servicioCtrl.createServicio);
router.get('/:id', servicioCtrl.getServicioById);
router.put('/:id', servicioCtrl.editServicio);
router.delete('/:id', servicioCtrl.deleteServicio);

// Exportacion del modulo de rutas
module.exports = router;