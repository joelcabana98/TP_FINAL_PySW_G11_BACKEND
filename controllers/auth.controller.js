//importamos el manejador de token
const jwt = require('jsonwebtoken');
const authCtrl = {}


/*Verifica el prefil del usuario logeado, solo deja seguir si es ADMINISTRADOR*/
authCtrl.verifyToken = async(req, res, next) => {

    if (!req.headers.authorization) {
        res.json({ message: 'Unauthorized request.' })
    }
    //se espera formato -> Bearer XXXX , interesa el token en pos(1) del array
    const token = req.headers.authorization.split(' ')[1];
    if (token === null) {
        res.json({ message: 'no Unauthorized request.' })
    }

    const payload = jwt.verify(token, "secretkey");

    console.log(payload);
    req.userId = payload._id;
    req.userPerfil = payload.perfil;

    if (req.userPerfil == "administrador") {
        console.log("correcto es administrador");
        next();
    } else {
        res.json({
            message: 'No autirizado - Solo Usuarios Administradores' + req.userPerfil
        })
    }
}

/*Verifica el prefil del usuario logeado, solo deja seguir si es ADMINISTRADOR O ADMINISTRATIVO*/
authCtrl.verifyTokenAdmins = async(req, res, next) => {

        if (!req.headers.authorization) {
            res.json({ message: 'Unauthorized request.' })
        }
        //se espera formato -> Bearer XXXX , interesa el token en pos(1) del array
        const token = req.headers.authorization.split(' ')[1];
        if (token === null) {
            res.json({ message: 'no Unauthorized request.' })
        }

        const payload = jwt.verify(token, "secretkey");

        console.log(payload);
        req.userId = payload._id;
        req.userPerfil = payload.perfil;

        if (req.userPerfil == "administrador" || req.userPerfil == "administrativo") {
            console.log("correcto es administrador");
            next();
        } else {
            res.json({
                message: 'No autirizado - Solo Usuarios Administradores y Administrativos' + 'su perfil es : ' +
                    req.userPerfil
            })
        }
    }
    //exportamos el manejador de token
module.exports = authCtrl;