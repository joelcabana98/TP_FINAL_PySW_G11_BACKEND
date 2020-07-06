const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');

const usuarioCtrl = {}

usuarioCtrl.getUsuarios = async(req, res) => {
    usuarios = await Usuario.find();
    res.json(usuarios);
}

usuarioCtrl.createUsuario = async(req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({
        'status': 'Usuario saved'
    });
}


usuarioCtrl.getUsuario = async(req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
}

usuarioCtrl.editUsuario = async(req, res) => {
    const vusuario = new Usuario(req.body);
    await Usuario.findByIdAndUpdate(req.params.id, { $set: vusuario }, { new: true });
    res.json({
        'status': 'Usuario updated'
    })
}
usuarioCtrl.deleteUsuario = async(req, res) => {
    await Usuario.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Usuario removed'
    })
}

usuarioCtrl.loginUsuario = async(req, res) => {
    //en req.body se espera que vengan las credenciales de login
    //defino los criterios de busqueda en base al username y password recibidos
    const criteria = {
            activo: true,
            usuario: req.body.usuario,
            password: req.body.password
        }
        //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    Usuario.findOne(criteria, function(err, user) {
        //el método findOne retorna un objeto que cumpla con los criterios de busqueda
        if (err) {
            res.json({
                status: 0,
                message: 'error'
            })
        };
        if (!user) {
            res.json({
                status: 0,
                message: "not found"
            })
        } else {
            const unToken = jwt.sign({ _id: user._id, perfil: user.perfil }, "secretkey");
            res.json({
                status: 1,
                message: "success",
                usuario: user.usuario,
                perfil: user.perfil,
                _id: user._id,
                token: unToken
            });
        }
    })
}
module.exports = usuarioCtrl;