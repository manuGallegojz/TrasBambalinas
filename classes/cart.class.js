const fs = require("fs");

class Carrito{
    constructor(archivo){
        this.archivo = archivo;
    }
    getAll(){ //Limpia el carrito entero
        const data = fs.readFileSync(this.archivo, "utf-8")
        const datos = JSON.parse(data);
        const datosLimpios = datos.filter(Boolean)
        return datosLimpios
    }
    addProduct(objeto){ //Recibe un objeto que agrega al carrito
        if(objeto.id){
        const data = fs.readFileSync(this.archivo, "utf-8")
        let productos = JSON.parse(data);
        let array = [productos.length+1, Date.now(), objeto];
        productos.push(array);
        fs.writeFileSync(this.archivo, JSON.stringify(productos), "utf-8")
        return productos;
    }
    }
    deleteById(Number) //: void - Elimina del archivo el objeto con el id buscado.
    {
        fs.readFile(this.archivo, "utf-8", (err, data)=>{
            if(err){
                console.error("Error al leer.")
            }else
            {
                let ListaSinProducto = JSON.parse(data).filter(x => {
                    return x[0] != Number
                })
                fs.writeFile(this.archivo, JSON.stringify(ListaSinProducto), "utf-8", (error) =>{
                    if(error){
                        console.log("Se produjo un error")
                        }
                })
            }
        }) 
        }
    deleteByIds(a, b){
        fs.readFile(this.archivo, "utf-8", (err, data)=>{
            if(err){
                console.error("Error al leer.")
            }else
            {
                let ListaSinProducto = JSON.parse(data).filter(x => {
                    return x[0] != a && x[2].id != b
                })
                fs.writeFile(this.archivo, JSON.stringify(ListaSinProducto), "utf-8", (error) =>{
                    if(error){
                        console.log("Se produjo un error")
                        }
                })
            }
        }) 
        }
}

module.exports = Carrito;