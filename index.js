var express = require('express');
var app = express();

const { mongoose } = require('./database')
const cors = require('cors');

//middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/api/usuario', require('./routes/usuario.router'));

//setting
app.set('port', process.env.PORT || 3000);

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});