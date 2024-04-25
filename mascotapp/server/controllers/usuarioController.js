const { matchedData } = require('express-validator');
const Usuario = require('../models/usuarioSchema');



// Listar usuarios 
 const getUsuarios = async(req, res) => {
    try{
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

// Agregar
 const addUsuario= async (req, res)=>{
   
    const usuario = req.body;
    
    const newUsuario = new Usuario(usuario);
    try{
        await newUsuario.save();
        res.status(201).json(newUsuario);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}

//Busqueda por id
const getUsuarioById = async (request, response) => {
    try {
        const usuario = await Usuario.findById(request.params._id);
        if (!usuario) {
            return response.status(404).json({ message: 'Usuario no encontrado' });
        }
        response.status(200).json(usuario);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};

// Editar  y guardar
 const editUsuario = async (req, res) => {
    // let usuario = req.body;

    // const  editUsuario = new Usuario(usuario);
    try{
        const usuario = await Usuario.findByIdAndUpdate(req.params._id, req.body, { new: true })
        // ({_id: req.params._id}, editUsuario);
        res.status(200).json(usuario);
    } catch (error){
        res.status(400).json({ message: error.message});     
    }
}


// Eliminar 
 const deleteUsuario = async (req, res) => {
    try{
        await Usuario.findByIdAndDelete( req.params._id);
        res.status(200).json({message : "Usuario eliminado"});
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}




module.exports = {getUsuarios, getUsuarioById, addUsuario, editUsuario, deleteUsuario}