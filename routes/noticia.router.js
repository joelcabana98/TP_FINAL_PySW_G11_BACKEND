//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const noticiaCtrl = require('./../controllers/noticia.controller');

// definiendo rutas
router.get('/', noticiaCtrl.getNoticias);
router.get('/noFiltre/', noticiaCtrl.getNoticiasNotFiltre);
router.post('/', noticiaCtrl.createNoticia);
router.post('/byDate/', noticiaCtrl.getNoticiasByFecha);
router.get('/:id', noticiaCtrl.getNoticia);
router.put('/:id', noticiaCtrl.editNoticia);
router.delete('/:id', noticiaCtrl.deleteNoticia);

//filtros
router.get('/notequals/:id', noticiaCtrl.getNoticiasIdNotEquals);

//exportacion del modulo de rutas
module.exports = router;