'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ServicioSchema = Schema({
    nombreEmpresa: String,
    detalle: String,
    fechaPago: String,
    fechaVencimiento: String,
    montoAPagar: String,
    montoPagado: String, 
    estado: String,
    imagenFactura: String,
    metodoPago: String
});

module.exports = mongoose.model('Servicio', ServicioSchema);