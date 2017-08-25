'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecursoSchema = Schema({
    nombre: String,
    descripcion: String,
    fechaCreacion: { type: Date, default: Date.now },
    estado: Boolean,
    ruta: String,
    orden: Number,
});

module.exports = mongoose.model('Recurso', RecursoSchema);