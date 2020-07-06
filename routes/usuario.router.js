//creamos un manejador de rutas modulars
const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const usuarioCtrl = require('./../controllers/usuario.controller');
const autCtrl = require('./../controllers/auth.controller');


// definiendo rutas
router.get('/', autCtrl.verifyToken, usuarioCtrl.getUsuarios);
router.post('/', autCtrl.verifyToken, usuarioCtrl.createUsuario);
router.get('/:id', autCtrl.verifyToken, usuarioCtrl.getUsuario);
router.put('/:id', autCtrl.verifyToken, usuarioCtrl.editUsuario);
router.delete('/:id', autCtrl.verifyToken, usuarioCtrl.deleteUsuario);

router.post('/login', usuarioCtrl.loginUsuario);

//exportacion del modulo de rutas
module.exports = router;