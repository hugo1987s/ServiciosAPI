'use strict'

var dotenv = require('dotenv').config((__dirname, '.env'));

const app = require('./app');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const dbConnectionString = `mongodb://${process.env.DB_SERVER}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.connect(dbConnectionString, { useNewUrlParser: true,  useUnifiedTopology: true  })
.then( ()=> {
    console.log(`Conexión a ${dbConnectionString} realizada exitosamente`);

    app.listen = (process.env.SERVER_PORT, ()=>{
        console.log(`Servidor corriendo en el puerto ${process.env.SERVER_PORT}`);
    });
})
.catch(err => console.log(err));

