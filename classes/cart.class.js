const fs = require("fs");
const knex = require("../src/dbs");

class Carrito{
    constructor(archivo){
        this.archivo = archivo;
    }
    getAll(){ //Limpia el carrito entero
        // const data = fs.readFileSync(this.archivo, "utf-8")
        // const datos = JSON.parse(data);
        // const datosLimpios = datos.filter(Boolean)
        // return datosLimpios
        knex(this.archivo).select("*")
        .then((res)=>{
            console.log("productos: " + res)
        }).catch((err)=>{
            console.log(err);
        })
    }
    addProduct(objeto){ //Recibe un objeto que agrega al carrito
        // if(objeto.id){
        // const data = fs.readFileSync(this.archivo, "utf-8")
        // let productos = JSON.parse(data);
        // let array = [productos.length+1, Date.now(), objeto];
        // productos.push(array);
        // fs.writeFileSync(this.archivo, JSON.stringify(productos), "utf-8")
        // return productos;

    //     if(objeto.id){
    //     knex("cart").insert(objeto)
    //     .then(()=>{
    //         let array = [productos.length+1, Date.now(), objeto];
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }

    if(objeto.id){
        knex(this.archivo).insert(objeto);
    }
    }
    deleteById(Number) //: void - Elimina del archivo el objeto con el id buscado.
    {
        // fs.readFile(this.archivo, "utf-8", (err, data)=>{
        //     if(err){
        //         console.error("Error al leer.")
        //     }else
        //     {
        //         let ListaSinProducto = JSON.parse(data).filter(x => {
        //             return x[0] != Number
        //         })
        //         fs.writeFile(this.archivo, JSON.stringify(ListaSinProducto), "utf-8", (error) =>{
        //             if(error){
        //                 console.log("Se produjo un error")
        //                 }
        //         })
        //     }
        // }) 
        knex(this.archivo).where({id : Number}).del()
        .then((res)=>{
            return res
        }).catch((err)=>{
            console.log(err);
        })
        }
}

module.exports = Carrito;