// Creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

// Defino controlador para el manejo de CRUD
const novedadCtrl = require('../controllers/novedad.controller');

// Definiendo rutas
router.get('/', novedadCtrl.getNovedades);
router.post('/', novedadCtrl.createNovedad);
router.post('/byDate/', novedadCtrl.getNovedadById);
router.get('/:id', novedadCtrl.getNovedadById);
router.put('/:id', novedadCtrl.editNovedad);
router.delete('/:id', novedadCtrl.deleteNovedad);

// Exportacion del modulo de rutas
module.exports = router;