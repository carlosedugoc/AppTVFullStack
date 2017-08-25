'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 2300;

mongoose.connect('mongodb://admin:fullstack@ds157873.mlab.com:57873/apptvfullstack', (error, res) => {
    if (error) {
        throw error;
    } else {
        console.log('Conexion exitosa.');
        app.listen(port, () => {
            console.log('Apirest escuchando.');
        })
    }
})