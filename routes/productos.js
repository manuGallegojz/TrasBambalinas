const express = require("express");
const app = express()
const fs = require("fs");

const Contenedor = require("../classes/contenedor.class");
const nuevoArchivo = new Contenedor("./productos.json");

const {Router} = express;
let router = new Router()

app.set("view engine", "ejs");
app.set("views", "../views")

//administrador
router.get("/formulario", (req, res)=>{
    res.render("pages/formulario.ejs", {data: nuevoArchivo.getAll(), mostrar: fs.readFileSync("./administrador.txt", "utf-8")})
})

router.post("/formulario", (req, res)=>{
    nuevoArchivo.save(req.body)
    res.render("pages/formulario.ejs", {data: nuevoArchivo.getAll(), mostrar: fs.readFileSync("./administrador.txt", "utf-8")})
})

router.delete("/products/:id", (req, res)=>{
    nuevoArchivo.deleteById(req.params.id)
    res.json({
        resultado: "ok",
        id: req.params.id
    })
})

router.put("/products/:id", (req, res)=>{
    nuevoArchivo.uploadById(req.params.id, req.body)
    res.json({
        resultado: "ok",
        id: req.params.id,
        nuevo: req.body
    })
})

//cliente
router.get("/getAll", (req, res)=>{
    res.render("pages/productos.ejs", {data: nuevoArchivo.getAll()});
}) 

router.get("/:id", (req, res)=>{
    res.render("pages/productos.ejs", {data: [nuevoArchivo.getById(req.params.id)]});
})




//exportando router

module.exports = router;