
const express = require('express');

const {getUsuarios, getUsuarioById, addUsuario, editUsuario, deleteUsuario} =require('../controllers/usuarioController') 

const routerUsuario = express.Router();

routerUsuario.get('/usuario', getUsuarios);
routerUsuario.post('/createusuario', addUsuario);
routerUsuario.get('/detalle/:_id', getUsuarioById);
routerUsuario.put('/updateusuario/:_id', editUsuario);
routerUsuario.delete('/deleteusuario/:_id', deleteUsuario);

module.exports = routerUsuario;