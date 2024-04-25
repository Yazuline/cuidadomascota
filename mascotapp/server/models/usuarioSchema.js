const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
nombre:{
    type:String,
    required:true
},
apellido:{
    type:String,
    required:true
},
domicilio:{
    type:String,
    required:true
},

barrio:{
    type:String,
    required:true
},

dni:{
    type:Number,
    required:true
},
telefono:{
    type:Number,
    required:true 
},
email:{
    type:String,
    required:true,
    unique:true
},

password:{
    type:String,
    required:true
},
//descripcion
sobreti:{
    type:String   
},
horario:{
    type:String,
    enum: ['Mañana', 'Tarde', 'Todo el día'],
},
servicio:{
    type:String,
    enum:["Baños", "Paseos", "Peluqueria", "Guarderia", "Supervision 24/7","Otros"],
    default: "Otros",
    
},
precioservicio:{
    type:Number
},
role: {
    type: String,
    enum:["cliente", "admin", "cuidador"],
    default: "cliente",
    },
    horario:{
        type: String,
    },
  // url fotografia perfil card
urlfoto:{
    type:String,
}
},{  
    //  registra fecha de creacion y fecha de actualizacion
    timestamps: true,
    versionKey: false
}
)
module.exports = mongoose.model("Usuario", UsuarioSchema)