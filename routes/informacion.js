const express = require("express");
const app = express()
const fs = require("fs");

const {Router} = express;
let router = new Router()

app.set("view engine", "ejs");
app.set("views", "../views")

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