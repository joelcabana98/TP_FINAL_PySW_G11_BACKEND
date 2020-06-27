const express = require('express');
const router = express.Router();

const afiliadoCtrl = require('./../controllers/afiliado.controller');

//Definiendo rutas
router.get('/', afiliadoCtrl.getAfiliados);
router.post('/', afiliadoCtrl.createAfiliado);
router.get('/:id', afiliadoCtrl.getAfiliado);
router.put('/:id', afiliadoCtrl.editAfiliado);
router.delete('/:id', afiliadoCtrl.deleteAfiliado);

router.post('/email', afiliadoCtrl.getAfiliadoByEmail);

//exportacion del modulo de rutas
module.exports = router;