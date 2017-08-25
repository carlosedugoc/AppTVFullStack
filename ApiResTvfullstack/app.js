'use strict'

var express = require('express');
var body = require('body-parser');
var app = express();


//cargar rutas
var recurso = require('./routes/recurso');

//cargar rutas
app.use(body.urlencoded({ extended: false }));
app.use(body.json());

//Configurar cabe

//rutas base
app.use('/api', recurso);


module.exports = app;