const express = require("express");
const app = express(); 

const ContenedorCarrito = require("../classes/cart.class.js");
const nuevoCarrito = new ContenedorCarrito("./carrito.json");

const Contenedor = require("../classes/contenedor.class");
const nuevoArchivo = new Contenedor("./productos.json");

const {Router} = express;
let router = new Router();

app.set("view engine", "ejs");
app.set("views", "../views");

router.post("/carrito/:id", (req, res)=>{
    nuevoCarrito.addProduct(nuevoArchivo.getById(req.params.id));
    res.render("pages/carrito.ejs", {data: nuevoCarrito.getAll()});
})

router.get("/carrito/:id", (req, res)=>{
    nuevoCarrito.addProduct(nuevoArchivo.getById(req.params.id));
    res.render("pages/carrito.ejs", {data: nuevoCarrito.getAll()});
})


router.get("/carrito", (req, res)=>{
    res.render("pages/carrito.ejs", {data: nuevoCarrito.getAll()});
})


router.delete("/carrito/:id", (req, res) => {
    nuevoCarrito.deleteById(req.params.id)
    res.json({
        resultado: "ok",
        id: req.params.id
    })
})

router.delete("/carrito/:id/product/:id_prod", (req, res) => {
    nuevoCarrito.deleteByIds(req.params.id, req.params.id_prod)
    res.json({
        resultado: "ok",
        id: req.params.id + " & " + req.params.id_prod
    })
})

//exportando router

module.exports = router;