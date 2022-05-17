const express = require("express")
const app = express(); 

const ContenedorCarrito = require("../classes/cart.class.js");
const nuevoCarrito = new ContenedorCarrito("./cart.json");

app.set("view engine", "ejs");
app.set("views", "../views")

const {Router} = express;

let router = new Router()


// RUTAS

router.get("/servicios", (req, res)=>{
    res.render("pages/servicios.ejs")
})

router.get("/chat", (req, res)=>{
    res.render("pages/chat.ejs", { root: '.' })
})

router.get("/contacto", (req, res)=>{
    res.render("pages/contacto.ejs")
})

//exportando router

module.exports = router;