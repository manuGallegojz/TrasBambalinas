const express = require("express");
const app = express()
const fs = require("fs");

const Contenedor = require("../classes/contenedor.class");
const gestionProductos = new Contenedor("products");
// const knex = require("../src/dbs");

const {Router} = express;
let router = new Router()

app.set("view engine", "ejs");
app.set("views", "../views")

//administrador
router.get("/formulario", (req, res)=>{

    console.log(gestionProductos.getAll())

        res.render("pages/formulario.ejs", {data: gestionProductos.getAll(), mostrar: fs.readFileSync("./administrador.txt", "utf-8")})
})

router.post("/formulario", (req, res)=>{

    gestionProductos.save([req.body])
    res.render("pages/formulario.ejs", {data: gestionProductos.getAll(), mostrar: fs.readFileSync("./administrador.txt", "utf-8")})

})

router.delete("/products/:id", (req, res)=>{

    gestionProductos.deleteById(req.params.id).then(()=>{
            res.send({data: "Producto Eliminado."});
        }).catch((error)=>{
            console.log("El error: " + error);
        })
})

router.put("/products/:id", (req, res)=>{

    gestionProductos.uploadById(req.params.id, req.body).then(()=>{
            res.send({data: "Producto Actualizado."});
        }).catch((error)=>{
            console.log("El error: " + error);
        })
})

//cliente

router.get("/getAll", (req, res)=>{

    console.log(gestionProductos.getAll())

    res.render("pages/productos.ejs", {data: gestionProductos.getAll()})

}) 

router.get("/:id", (req, res)=>{

            res.render("pages/productos.ejs", {data: gestionProductos.getById(req.params.id), mostrar: fs.readFileSync("./administrador.txt", "utf-8")})
    
    })

//exportando router

module.exports = router;