const { matchedData } = require('express-validator');
const Mascota = require('../models/mascotaSchema');



// Listar Mascotas 
 const getMascotas=async(req, res)=>{
    try{
        const mascota =await Mascota.find();
        res.status(200).json(mascota);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

// Agregar
 const addMascotas=async(req, res)=>{
   
    const mascota = req.body;
    
    const newMascotas = new Mascota(mascota);
    try{
        await newMascotas.save();
        res.status(201).json(newMascotas);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}

//Busqueda por id
 const getMascotasById = async (reques, response) => {
    try{
        const mascota = await Mascota.findById(reques.params._id);
        if (!mascota) {
            return response.status(404).json({ message: 'Mascota no encontrada' });
        }
        response.status(200).json(mascota);
    }catch( error ){
        response.status(500).json({ message: error.message })
    }


}

// Editar  y guardar
 const editMascotas = async (req, res) => {
    // let mascota = req.body;

    // const  editMascotas = new Mascota(mascota);
    try{
        const  mascota = await Mascota.findByIdAndUpdate(req.params._id, req.body, { new: true })
        // .updateOne({_id: req.params._id}, editMascotas);
        res.status(201).json(mascota);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}


// Eliminar 
 const deleteMascotas = async (req, res) => {
    try{
        await Mascota.findByIdAndDeletee( req.params.id);
        res.status(200).json({message :"Mascotas eliminado"});
    } catch (error){
        res.status(409).json({ message: error.message});     
    }
}




module.exports = {getMascotas, getMascotasById, addMascotas, editMascotas, deleteMascotas}