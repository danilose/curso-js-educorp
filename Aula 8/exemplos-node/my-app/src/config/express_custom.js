const express = require('express');
// o módulo express retorna uma função que indica se a aplicação está habilitada a criar a requisição pro servidor
const app = express();
// servidor inicializado

const rotas = require('../app/rotas/rotas');

rotas(app);

module.exports = app;