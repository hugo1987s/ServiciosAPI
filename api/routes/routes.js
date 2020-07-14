const { default: app } = require("../app");

'use strict'

var express = require('express');
//var UserController = require('../controllers/user');

var api = express.Router();
//var md_auth = require('../middlewares/authenticated');

// Creamos una ruta para los métodos que tenemos en nuestros controladores
//api.get('/user/:id', md_auth.ensureAuth, UserController.getUser);

api.get('/user/:id', ()=>{
    console.log(`Desde el router`);
});
// Exportamos la configuración
module.exports = api;


/*
app.use('/', (req, res) => {
    console.log(`Entrando al route home`);
    res.send(200);
});
*/