const express = require("express")
const app = express(); 

const ContenedorCarrito = require("../classes/cart.class.js");
const nuevoCarrito = new ContenedorCarrito("./cart.json");

app.set("view engine", "ejs");
app.set("views", "../views")

const {Router} = express;

let router = new Router()

// RUTAS

router.get("/", (req, res)=>{
    res.render("form", {guardado: true, data: nuevoArchivo.getAll(), eliminar: nuevoArchivo.deleteById(Number)})
})

router.post("/", (req, res)=>{
    nuevoArchivo.save(req.body)
    res.render("form", {eliminar: nuevoArchivo.deleteById(Number)})
})

//actualizar productos

router.put("/:id", (req, res)=>{
    res.json({
        resultado: "ok",
        id: req.params.id,
        nuevo: req.body
    })
})

//actualizar productos

router.delete("/:id", (req, res)=>{
    res.json({
        resultado: "ok",
        id: req.params.id
    })
})

//exportando router

module.exports = router;