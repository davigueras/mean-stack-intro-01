// Incluyo la libreria de Express e instancío un objeto Express
// a partir del cual interactuar.
var express = require('express');
var port = 8080;
var app = express();

// Incluyo la libreria de Mongoose y la conecto a la db mongo
var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Algo que hay que ahcer aparae vitar warns
mongoose.connect('mongodb://localhost:27017/rest-api-initiation-01');

// Incluyo la libreria body-parser
var bodyParser = require('body-parser');
// Insto al objeto principal a usar body-parser
// Esto me permitira acceder a los datos (tanto via json como via url
// incrustados) de un metodo POST mediante el objeto req.body
// Esto basicamente ha de ser siempre así. El extended es obligatorio y
// es mejor true que false.
// Parseará el body de cualquier request
// esta es la formula mas basica, me suena que tiene alguna flaqueza de
// seguridad per eso es para investigar mas adelante
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Incluye el objeto router de cada una de las librerias.
var metalsRouter = require('./controllers/metalsRouter');
var fruitsRouter = require('./controllers/fruitsRouter');

// Intruye que enrutador usar segun la url entrante
app.use('/api/metals', metalsRouter);
app.use('/api/fruits', fruitsRouter);

// Inicia la escucha de requests por parte de Express
app.listen(port);
console.log('Listening on ' + port);
