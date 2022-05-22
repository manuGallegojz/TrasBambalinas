const express = require("express");
const app = express()
const fs = require("fs");

const Contenedor = require("../classes/contenedor.class");
const nuevoArchivo = new Contenedor("messages");
const knex = require("../src/dbs");

const {Router} = express;
let router = new Router()

app.set("view engine", "ejs");
app.set("views", "../views")

//administrador
router.get("/formulario", (req, res)=>{
    knex
        .from("products")
        .select("*")
        .then((data) => {
            res.render("pages/formulario.ejs", {data: data, mostrar: fs.readFileSync("./administrador.txt", "utf-8")})
        })
        .catch((err) => {
        console.log(err);
        });
})

router.post("/formulario", (req, res)=>{
    knex("products").insert(req.body)
        .then(()=>{
            console.log("guardado!")
        }).catch((err)=>{
            console.log(err);
        })

    knex
        .from("products")
        .select("*")
        .then((data) => {
            res.render("pages/formulario.ejs", {data: data, mostrar: fs.readFileSync("./administrador.txt", "utf-8")})
        })
        .catch((err) => {
        console.log(err);
        });
})

router.delete("/products/:id", (req, res)=>{
    knex("products").where({id : req.params.id}).del()
        .then((res)=>{
            console.log({ data: "Eliminado." });
        }).catch((err)=>{
            console.log(err);
        })
    res.json({
        resultado: "ok",
        id: req.params.id
    })
})

router.put("/products/:id", (req, res)=>{
    knex("products").where({id : req.params.id}).update(req.body)
        .then((res)=>{
            res.send({data: "Producto Actualizdo."});
        }).catch((err)=>{
            console.log(err);
        })
    res.json({
        resultado: "ok",
        id: req.params.id,
        nuevo: req.body
    })
})

//cliente

router.get("/getAll", (req, res)=>{
    knex
        .from("products")
        .select("*")
        .then((data) => {
            res.render("pages/productos.ejs", {data: data});
        })
        .catch((err) => {
        console.log(err);
        });
}) 

router.get("/:id", (req, res)=>{
    knex("products")
        .from('products')
        .select("*")
        .where({id : req.params.id})
        .then((data)=>{  
            res.render("pages/productos.ejs", {data: data});
        }).catch((err)=>{
            console.log(err);
        })
})

//exportando router

module.exports = router;