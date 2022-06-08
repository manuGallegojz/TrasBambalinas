const express = require("express");
const { send } = require("express/lib/response");
const app = express();

const Contenedor = require("../classes/contenedor.class");
const gestionCarrito = new Contenedor("cart");
const gestionProductos = new Contenedor("products");

// const knex = require("../src/dbs");

const {Router} = express;
let router = new Router();

app.set("view engine", "ejs");
app.set("views", "../views");

router.post("/carrito/:id", (req, res)=>{

    gestionCarrito.save(gestionProductos.getById(req.params.id))

    res.render("pages/carrito.ejs", {data: gestionCarrito.getAll()})
})

router.get("/carrito/:id", (req, res)=>{

    gestionCarrito.save(gestionProductos.getById(req.params.id))

    res.render("pages/carrito.ejs", {data: gestionCarrito.getAll()})

})

router.get("/carrito", (req, res)=>{

    res.render("pages/carrito.ejs", {data: gestionCarrito.getAll()})

})

router.delete("/carrito/:id", (req, res) => {
    gestionCarrito.deleteById(req.params.id)
})

//exportando router

module.exports = router;