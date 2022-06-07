const {Schema, model} = require("mongoose");

const productsSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mensaje: {
        type:String,
        required:true
    },
    timestamp: {
        type:String,
      }
})

module.exports = model("messages", productsSchema);