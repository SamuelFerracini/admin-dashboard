const express = require('express');
const UserController = require('./controllers/UserController.js');

const routes = express.Router();

routes.get('/api/users', UserController.index); // Lista todos os usuários, tirando o que fez a requisição
routes.get('/api/users/:_id', UserController.getUser); // Lista o usuário em especifio
routes.put('/api/users/:_id', UserController.update);
routes.post('/api/users', UserController.store); // Cria um novo usuário
routes.post('/api/users/login', UserController.login); // Login do usuário


module.exports = routes;
