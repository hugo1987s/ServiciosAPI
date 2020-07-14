'use strict'

import express from 'express';
import { urlencoded, json } from 'body-parser';
const app = express();
import routes from './routes/routes';

//Carga de Middlewares
app.use(urlencoded({extended:false}));
app.use(json());
app.use('/api', routes);

export default app;

