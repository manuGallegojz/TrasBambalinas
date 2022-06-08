// const fs = require("fs");
// const knex = require("../src/dbs");
const { uuid } = require('uuidv4');

//FIREBASE

const db = require("../db");

class Contenedor{
    constructor(archivo){
        this.archivo = archivo;
    }

    save(objeto) //Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
    {

    const collectionFirebase = db.collection(`${this.archivo}`)

    if(objeto.nombre === undefined){

        let objetoCambio = {
                        title: objeto[0].title,
                        image: objeto[0].image,
                        price: parseInt(objeto[0].price),
                        stock: parseInt(objeto[0].stock),
                        timestamp: Date.now()
                    }
        let doc = collectionFirebase.doc(`${uuid()}`);
        doc.create(objetoCambio)

    }else{

        let objetoMensajes = {
            nombre: objeto.nombre,
            email: objeto.email,
            mensaje: objeto.mensaje,
            timestamp: Date.now()
        }
        let doc = collectionFirebase.doc(`${uuidv4()}`);
        doc.create(objetoMensajes)

    }

        }

    getById(Number) //Recibe un id y devuelve el objeto con ese id, o null si no está.
    {
        const collectionFirebase = db.collection(`${this.archivo}`)
        const object = collectionFirebase.doc(`${Number}`);

        const item = object.get();

        const response = item.data;

        return response;
    }

    getAll() //Devuelve un array con los objetos presentes en el archivo.
    {

        const query = db.collection(`${this.archivo}`);

        query.get().then((data)=>{

            let arreglo = [];

            for (let i = 0; i < data.docs.length; i++) {
                let nuevoObjeto = {
                    image: data.docs[i]._fieldsProto.image.stringValue,
                    title: data.docs[i]._fieldsProto.title.stringValue,
                    price: data.docs[i]._fieldsProto.price.integerValue,
                    stock:data.docs[i]._fieldsProto.price.integerValue,
                    timestamp:data.docs[i]._fieldsProto.timestamp.integerValue,
                }

                arreglo.push(nuevoObjeto)

            }

            if(arreglo[0]){
                return arreglo
            }

        });
        
        }

    deleteById(Number) //: void - Elimina del archivo el objeto con el id buscado.
    {

        const query = db.collection(`${this.archivo}`);
        query.doc(`${Number}`).delete();

        }

    uploadById(Number, Object){

        let objetoActualizado = {
            title: Object.title,
            image: Object.image,
            price: parseInt(Object.price),
            stock: parseInt(Object.stock)
        }

        const query = db.collection(`${this.archivo}`);
        query.doc(`${Number}`).update(objetoActualizado);
    }
    }

//Creación de la instancia. Fijarse que la ruta hace referencia a la posición en la que se ubican los archivos utilizados.

module.exports = Contenedor;