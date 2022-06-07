const fs = require("fs");
const knex = require("../src/dbs");

require("../db");

class Contenedor{
    constructor(archivo){
        this.archivo = archivo;
    }

    save(objeto) //Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    {
        const Product = require(this.archivo);
        console.log(objeto[0])

        if(objeto.nombre === undefined){

            let objetoCambio = {
                title: objeto[0].title,
                image: objeto[0].image,
                price: parseInt(objeto[0].price),
                stock: parseInt(objeto[0].stock),
                timestamp: Date.now()
            }

        const nuevo = new Product(objetoCambio);

        const productSave = nuevo.save();

        return productSave;

        }else{

        let objetoMensajes = {
                    nombre: objeto.nombre,
                    email: objeto.email,
                    mensaje: objeto.mensaje,
                    timestamp: Date.now()
                }

        const nuevo = new Product(objetoMensajes);

        const message = nuevo.save();

        return message;
    }

        }

    getById(Number) //Recibe un id y devuelve el objeto con ese id, o null si no está.
    {
        const Product = require(this.archivo);
        const product = Product.find({_id : Number});

        return product;
    }

    getAll() //Devuelve un array con los objetos presentes en el archivo.
    {
        
        const Product = require(this.archivo);

        const products = Product.find();
        
        return products;

        }

    deleteById(Number) //: void - Elimina del archivo el objeto con el id buscado.
    {
        const productDelete = Product.findOneAndDelete({_id : Number});
        return productDelete;
        }

    uploadById(Number, Object){
        let objetoActualizado = {
            title: Object.title,
            image: Object.image,
            price: parseInt(Object.price),
            stock: parseInt(Object.stock)
        }

        const product = Product.findOneAndUpdate({_id : Number}, objetoActualizado);
        return product;
    }
    }

//Creación de la instancia. Fijarse que la ruta hace referencia a la posición en la que se ubican los archivos utilizados.

module.exports = Contenedor;