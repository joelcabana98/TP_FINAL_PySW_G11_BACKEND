var express = require('express');
var app = express();

const { mongoose } = require('./database')
const cors = require('cors');

// Middlewares
app.use(express.json({limit: '50mb'}));
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/api/usuario', require('./routes/usuario.router'));
app.use('/api/afiliado', require('./routes/afiliado.router'));
app.use('/api/noticia', require('./routes/noticia.router'));
app.use('/api/pago', require('./routes/pago.routes'));
app.use('/api/servicio', require('./routes/servicio.routes'));

// Setting
app.set('port', process.env.PORT || 3000);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});