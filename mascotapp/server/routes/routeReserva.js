const express = require('express');
const {
    getReservas,
    getReservaById,
    addReserva,
    editReserva,
    deleteReserva
} = require('../controllers/reservaController');

const routerReserva = express.Router();

routerReserva.get('/reservas', getReservas);
routerReserva.post('/reserva', addReserva);
routerReserva.get('/reserva/:_id', getReservaById);
routerReserva.put('/reserva/:_id', editReserva);
routerReserva.delete('/reserva/:_id', deleteReserva);

module.exports = routerReserva;
