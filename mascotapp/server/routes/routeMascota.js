const express = require('express');

const {getMascotas, getMascotasById, addMascotas, editMascotas, deleteMascotas} =require('../controllers/mascotaController') 

const routerMascota = express.Router();

routerMascota.get('/mascota', getMascotas);
routerMascota.post('/createmascota', addMascotas);
routerMascota.get('/detallemascota/:_id', getMascotasById);
routerMascota.put('/updatemascota/:_id', editMascotas);
routerMascota.delete('/deletemascota/:_id', deleteMascotas);

module.exports = routerMascota;