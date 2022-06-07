const mongoose = require("mongoose")

mongoose.connect(`mongodb+srv://gallegojz:123456manuel@ecommerce-coder.eaipo.mongodb.net/ecommerce-coder?retryWrites=true&w=majority`)

mongoose.connection.on("open",()=>{
    console.log("Base de datos conectada con éxito! MONGO ATLAS")
})

mongoose.connection.on("error",()=>{
    console.log("Error al conectarse a la base de datos.")
})