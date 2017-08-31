'use strict'

var express = require('express');
var body = require('body-parser');
var app = express();


//cargar rutas
var recurso = require('./routes/recurso');

//cargar rutas
app.use(body.urlencoded({ extended: false }));
app.use(body.json());

//Configurar cabeceras http
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


//rutas base
app.use('/api', recurso);


module.exports = app;