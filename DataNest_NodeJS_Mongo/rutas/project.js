'use strict'


var express = require('express');
var ProjectController = require('../controlers/project');
var router = express.Router();

// Define una ruta HTTP GET en la URL /home. 
// Cuando un cliente accede a esta ruta, se ejecuta la función home del ProjectController.

router.get('/home', ProjectController.home);

// router.post('/test', ProjectController.test): Define una ruta HTTP POST en la URL /test. 
// Cuando un cliente envía datos a esta ruta, se ejecuta la función test del ProjectController.
router.post('/test', ProjectController.test);

// Ruta para giardar proyecto creado
router.post('/save-project', ProjectController.saveProject); 
// Ruta para ver el proyecto seleccionado con id opcional (?)
// El id debe ser tal cual en mongodb
router.get('/project/:id?', ProjectController.getProject)

module.exports = router; 