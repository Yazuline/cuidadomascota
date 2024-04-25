const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario', // Referencia al modelo de usuario (dueño)
        required: true
    },
    cuidadorId: {
        type: mongoose.Types.ObjectId,
        ref: 'Usuario', // Referencia al modelo de usuario (cuidador)
        required: true
    },
    mascotaId: {
        type: mongoose.Types.ObjectId,
        ref: 'Mascota', // Referencia al modelo de mascota
        required: true
    },
    servicio: {
        type: String, // Cambiado de ObjectId a String
        required: true
    },
    fechaDeCreacion: {
        type: Date,
        default: Date.now,
        required: true
    },
    fechaDelServicio: {
        type: Date,
        required: true,
        validate: {
            validator: function(v) {
                return !isNaN(Date.parse(v));
            },
            message: props => `${props.value} no es una fecha válida en el formato "dd/mm/yyyy"`
        }
    },
    precioDelServicio: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return !isNaN(parseFloat(v)) && isFinite(v);
            },
            message: props => `${props.value} no es un número válido`
        }
    }
    ,
    estado: {
        type: String,
        enum: ['Pendiente', 'Confirmado', 'Cancelado', 'Completado'],
        default: 'Pendiente'
    }
});

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;
