const express = require('express');
const router = express.Router();

const afiliadoCtrl = require('./../controllers/afiliado.controller');
const autCtrl = require('./../controllers/auth.controller');

//Definiendo rutas
router.get('/', afiliadoCtrl.getAfiliados);
router.post('/', autCtrl.verifyTokenAdmins, afiliadoCtrl.createAfiliado);
router.get('/:id', autCtrl.verifyTokenAdmins, afiliadoCtrl.getAfiliado);
router.put('/:id', autCtrl.verifyTokenAdmins, afiliadoCtrl.editAfiliado);
router.delete('/:id', autCtrl.verifyTokenAdmins, afiliadoCtrl.deleteAfiliado);

//Rutas de busqueda
router.post('/email', afiliadoCtrl.getAfiliadoByEmail);
router.post('/dni', autCtrl.verifyTokenAdmins, afiliadoCtrl.getAfiliadoByDni);

//exportacion del modulo de rutas
module.exports = router;