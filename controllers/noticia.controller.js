const Noticia = require('../models/noticia');

const noticiaCtrl = {}

noticiaCtrl.getNoticias = async(req, res) => {
    noticias = await Noticia.find({ "vigente": true }).sort({ fecha: -1 }).populate("usuario", { "usuario": 1 });
    res.json(noticias);
}

noticiaCtrl.getNoticiasNotFiltre = async(req, res) => {
    noticias = await Noticia.find().sort({ fecha: -1 }).populate("usuario", { "usuario": 1 });
    res.json(noticias);
}


noticiaCtrl.getNoticiasIdNotEquals = async(req, res) => {
    noticias = await Noticia.find({ _id: { $ne: req.params.id }, "vigente": true }).sort({ fecha: -1 }).populate("usuario", { "usuario": 1 });
    res.json(noticias);
}



noticiaCtrl.getNoticiasByFecha = async(req, res) => {
    console.log("entro backend by fecha" + req.body.desde + "   " + req.body.hasta);
    console.log("entro backend by fecha" + req.params.desde + "   " + req.params.hasta);
    noticias = await Noticia.find({
        "fecha": { "$gte": req.body.desde, "$lt": req.body.hasta }
    });
    res.json(noticias);
}


noticiaCtrl.createNoticia = async(req, res) => {
    const noticia = new Noticia(req.body);
    await noticia.save();
    res.json({
        'status': 'Noticia saved'
    });
}

noticiaCtrl.editNoticia = async(req, res) => {
    const vNoticia = new Noticia(req.body);

    await Noticia.findByIdAndUpdate(req.params.id, { $set: vNoticia }, { new: true });
    res.json({
        'status': 'Noticia updated'
    })
}

noticiaCtrl.getNoticia = async(req, res) => {
    const noticia = await Noticia.findById(req.params.id).populate("usuario");
    res.json(noticia);
}

noticiaCtrl.deleteNoticia = async(req, res) => {
    await Noticia.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Noticia removed'
    })
}
module.exports = noticiaCtrl;