const mongoose = require('mongoose');
require("dotenv").config()
/**
 * The function `Connection` establishes a connection to a MongoDB database using the `mongoose`
 * library in a Node.js environment.
 */
const Connection = async () => {
    const URL = process.env.BD_URL
    mongoose
    .connect(URL, {})
    .then(()=>{
        console.log("Conectado a la base de datos")
    
    }).catch((err)=>{
     console.log(err)
    });
};

module.exports = Connection;