const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const Connection = require("./database/db");

// Importa los archivos de rutass
const routerUsuario = require('./routes/routeUsuario');
const routerMascota = require('./routes/routeMascota');
const routerReserva = require('./routes/routeReserva');

const PORT = process.env.PORT || 3001;
Connection();
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Validando que la url frontend se pueda revisar
const corsOptions = {
    origin: 'https://cuidadomascota.vercel.app/', // URL de frontend
    optionsSuccessStatus: 200 // Algunos navegadores antiguos (IE11, varios SmartTVs) interpretarán correctamente los códigos de estado 204 y devolverán el cuerpo de la respuesta.
  }
  
  app.use(cors(corsOptions));

// Utiliza las rutas importadas
app.use(routerUsuario);
app.use(routerMascota);
app.use(routerReserva);

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto " + PORT);
});
