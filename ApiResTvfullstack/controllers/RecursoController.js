'use strict'
var Recurso = require('../models/Recurso');

function guardar(req, res) {
    var params = req.body;
    var recurso = new Recurso();
    recurso.nombre = params.nombre;
    recurso.descripcion = params.descripcion;
    recurso.estado = params.estado;
    recurso.ruta = params.ruta;
    recurso.orden = params.orden;

    recurso.save((error, entidad) => {
        if (error) {
            res.status(500).send('El error al guardar.');
        } else {
            if (!entidad) {
                res.status(400).send('Sin conexion');
            } else {
                res.status(200).send({ recurso: entidad, mensaje: 'Se almaceno correctamente.' });
            }
        }
    });
}

module.exports = {
    guardar
}