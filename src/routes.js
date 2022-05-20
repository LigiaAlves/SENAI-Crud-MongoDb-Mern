
const express = require('express');
const routes = express.Router();

routes.get('/', Usuario.index);

//Rotas de usuários
routes.post('/api/usuarios',Usuario.create);
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details', Usuario.details);

module.exports = routes;
