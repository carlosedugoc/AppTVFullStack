'use strict'

var api = require('express').Router();
var recursocontroller = require('../controllers/RecursoController');

api.post('/recurso', recursocontroller.guardar);

module.exports = api;