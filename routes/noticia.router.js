//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const noticiaCtrl = require('./../controllers/noticia.controller');
const autCtrl = require('./../controllers/auth.controller');

// definiendo rutas
router.get('/', noticiaCtrl.getNoticias);
router.get('/noFiltre/', autCtrl.verifyTokenAdmins, noticiaCtrl.getNoticiasNotFiltre);
router.post('/', autCtrl.verifyTokenAdmins, noticiaCtrl.createNoticia);
router.post('/byDate/', noticiaCtrl.getNoticiasByFecha);
router.get('/:id', noticiaCtrl.getNoticia);
router.put('/:id', autCtrl.verifyTokenAdmins, noticiaCtrl.editNoticia);
router.delete('/:id', autCtrl.verifyTokenAdmins, noticiaCtrl.deleteNoticia);

//filtros
router.get('/notequals/:id', noticiaCtrl.getNoticiasIdNotEquals);

//exportacion del modulo de rutas
module.exports = router;