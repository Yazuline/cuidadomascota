const Reserva = require('../models/reservaSchema');

// Listar reservas
const getReservas = async (req, res) => {
    try {
        const reservas = await Reserva.find()
        .populate('usuarioId', 'nombre apellido email urlfoto')
        .populate('cuidadorId', 'nombre apellido email')
        .populate('mascotaId', 'nombre');
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Agregar reserva
const addReserva = async (req, res) => {
    const reservaData = req.body;

    const nuevaReserva = new Reserva(reservaData);
    try {
        await nuevaReserva.save();
        res.status(201).json(nuevaReserva);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Buscar reserva por ID
const getReservaById = async (req, res) => {
    try {
        const reserva = await Reserva.findById(req.params._id)
        if (!reserva) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
        res.status(200).json(reserva);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Editar reserva
const editReserva = async (req, res) => {
    try {
        const reserva = await Reserva.findByIdAndUpdate(req.params._id, req.body, { new: true });
        res.status(200).json(reserva);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Eliminar reserva
const deleteReserva = async (req, res) => {
    try {
        await Reserva.findByIdAndDelete(req.params._id);
        res.status(200).json({ message: 'Reserva eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getReservas, getReservaById, addReserva, editReserva, deleteReserva };
