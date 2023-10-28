const express = require('express');
const routes = express.Router();
const proyectoXControlador = require('./controller');

routes.post('/api/SignUpUser', proyectoXControlador.singUpUser);

module.exports = routes;
