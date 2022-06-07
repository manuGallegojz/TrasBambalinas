const express = require("express");
const app = express()
const fs = require("fs");

const Contenedor = require("../classes/contenedor.class");
const gestionProductos = new Contenedor("../models/products");
// const knex = require("../src/dbs");

const {Router} = express;
let router = new Router()

app.set("view engine", "ejs");
app.set("views", "../views")

//administrador
router.get("/formulario", (req, res)=>{

    gestionProductos.getAll().then((data)=>{
        console.log(data);
        res.render("pages/formulario.ejs", {data: data, mostrar: fs.readFileSync("./administrador.txt", "utf-8")})
    }).catch((error)=>{
        console.log("El error: " + error);
    })
})

router.post("/formulario", (req, res)=>{

    gestionProductos.save([req.body]).then((data)=>{
        console.log("Agregado.");
    }).catch((error)=>{
        console.log("El error: " + error);
    })

    gestionProductos.getAll().then((data)=>{
                console.log(data);
                res.render("pages/formulario.ejs", {data: data, mostrar: fs.readFileSync("./administrador.txt", "utf-8")})
            }).catch((error)=>{
                console.log("El error: " + error);
            })

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

    gestionProductos.getAll().then((data)=>{
        console.log(data);
        res.render("pages/productos.ejs", {data: data, mostrar: fs.readFileSync("./administrador.txt", "utf-8")})
    }).catch((error)=>{
        console.log("El error: " + error);
    })

}) 

router.get("/:id", (req, res)=>{

    gestionProductos.getById(req.params.id).then((data)=>{
            res.render("pages/productos.ejs", {data: data, mostrar: fs.readFileSync("./administrador.txt", "utf-8")})
        }).catch((error)=>{
            console.log("El error: " + error);
        })
    })

//exportando router

module.exports = router;