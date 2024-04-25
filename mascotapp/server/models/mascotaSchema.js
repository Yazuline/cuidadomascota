const mongoose = require('mongoose')

const MascotaShema = new mongoose.Schema({
    //id dueño de mascota validar si la forma es correcta
usuarioId: {
        type: mongoose.Types.ObjectId,
},
nombre:{
    type:String,
    required:true
},
raza:{
    type:String,
    required:true
},
edad:{
    type:String,
    required:true
},

enfermedad:{
    type:String,
},

medicamento:{
    type:String,
    required:true
},
personalidad:{
    type:String,
  
},
vacunas:{
    type:Boolean,
    required:true,
},

urlvacunas:{
    type:String,
    
},
//descripcion
urlrecetasmedicas:{
    type:String,   
},
urldocumentoextra:{
    type:String,   
}


},{  
    //  registra fecha de creacion y fecha de actualizacion
    timestamps: true,
    versionKey: false
}
)
module.exports = mongoose.model("Mascota", MascotaShema)