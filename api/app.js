'use strict'

import express from 'express';
import { urlencoded, json } from 'body-parser';
import routes from './routes/routes';

const app = express();

//Carga de Middlewares
app.use(urlencoded({extended:false}));
app.use(json());
app.use('/api', routes);

module.exports = app;

