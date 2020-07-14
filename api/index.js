'use strict'

require('dotenv').config();


const app = require('./app');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//const dbConnectionString = `mongodb://${ENV.DB_SERVER}:${ENV.DB_PORT}/${ENV.DB_NAME}`;

console.log(dbConnectionString);
/*
mongoose.connect(dbConnectionString, { useMongoClient: true})
.then( ()=> {
    console.log(`Conexión a ${dbConnectionString} realizada exitosamente`);

    app.listen(port, ()=>{
        console.log(`Servidor corriendo en el puerto ${ENV.SERVER_PORT}`);
    });
})
.catch(err => console.log(err));

*/