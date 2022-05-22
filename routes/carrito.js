const express = require("express");
const { send } = require("express/lib/response");
const app = express();

const ContenedorCarrito = require("../classes/cart.class.js");
const nuevoCarrito = new ContenedorCarrito("cart");

const Contenedor = require("../classes/contenedor.class");
const nuevoArchivo = new Contenedor("products");
const knex = require("../src/dbs");

const {Router} = express;
let router = new Router();

app.set("view engine", "ejs");
app.set("views", "../views");

router.post("/carrito/:id", (req, res)=>{
    knex("products")
        .from('products')
        .select("*")
        .where({id : req.params.id})
        .then((json)=>{
            knex("cart").insert(json[0])
            .then(()=>{
                console.log("guardado!")
            }).catch((err)=>{
                console.log(err);
            })
        }).catch((err)=>{
            console.log(err);
        });

    knex.from("cart").select("*")
        .then((json)=>{
            res.render("pages/carrito.ejs", {data: json});
        }).catch((err)=>{
            console.log(err);
        })
})

router.get("/carrito/:id", (req, res)=>{
    knex("products")
        .from('products')
        .select("*")
        .where({id : req.params.id})
        .then((json)=>{
            knex("cart").insert(json[0])
            .then(()=>{
                console.log("guardado!")
            }).catch((err)=>{
                console.log(err);
            })
        }).catch((err)=>{
            console.log(err);
        });

    knex.from("cart").select("*")
        .then((json)=>{
            res.render("pages/carrito.ejs", {data: json});
        }).catch((err)=>{
            console.log(err);
        })
})


router.get("/carrito", (req, res)=>{
    knex.from("cart").select("*")
        .then((json)=>{
            res.render("pages/carrito.ejs", {data: json});
        }).catch((err)=>{
            console.log(err);
        })
})


router.delete("/carrito/:id", (req, res) => {
    knex("cart").where({id : req.params.id}).del()
        .then((res)=>{
            console.log("Eliminado.");
        }).catch((err)=>{
            console.log(err);
        })
    res.json({
        resultado: "ok",
        id: req.params.id
    })
})

//exportando router

module.exports = router;