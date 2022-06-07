const express = require("express");
const { send } = require("express/lib/response");
const app = express();

const Contenedor = require("../classes/contenedor.class");
const gestionCarrito = new Contenedor("../models/cart");
const gestionProductos = new Contenedor("../models/products");

// const knex = require("../src/dbs");

const {Router} = express;
let router = new Router();

app.set("view engine", "ejs");
app.set("views", "../views");

router.post("/carrito/:id", (req, res)=>{
    gestionProductos.getById(req.params.id).then((data)=>{
        gestionCarrito.save(data).then(()=>{
            console.log("guardado!")
        }).catch((error)=>{
            console.log("El error:" + error);
        });
    }).catch((error)=>{
        console.log("El error:" + error);
    })

    gestionCarrito.getAll().then((data)=>{
        console.log(data);
        res.render("pages/carrito.ejs", {data: data})
    }).catch((error)=>{
        console.log("El error:" + error);
    })
})

router.get("/carrito/:id", (req, res)=>{
    gestionProductos.getById(req.params.id).then((data)=>{
        gestionCarrito.save(data).then(()=>{
            console.log("guardado!")
        }).catch((error)=>{
            console.log("El error:" + error);
        });
    }).catch((error)=>{
        console.log("El error:" + error);
    })

    gestionCarrito.getAll().then((data)=>{
        console.log(data);
        res.render("pages/carrito.ejs", {data: data})
    }).catch((error)=>{
        console.log("El error:" + error);
    })

})

router.get("/carrito", (req, res)=>{
    gestionCarrito.getAll().then((data)=>{
        console.log(data);
        res.render("pages/carrito.ejs", {data: data})
    }).catch((error)=>{
        console.log("El error:" + error);
    })
})

router.delete("/carrito/:id", (req, res) => {
    gestionCarrito.deleteById(req.params.id).then(()=>{
        res.send({data: "Producto Eliminado."});
    }).catch((error)=>{
        console.log("El error:" + error);
    })
})

//exportando router

module.exports = router;