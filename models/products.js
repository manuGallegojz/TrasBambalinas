const {Schema, model} = require("mongoose");

const productsSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    stock: {
        type:Number,
        required:true
    },
    price: {
        type:Number,
        default:0
    }
})

module.exports = model("productos", productsSchema);