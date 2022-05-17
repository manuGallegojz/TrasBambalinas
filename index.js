//paquetes externos

const multer = require("multer");
// const handlebars = require("express-handlebars");
const express = require("express");
const app = express();
const fs = require("fs");

//server

const http = require("http");
const server = http.createServer(app);

//socket

// const {Server} = require("socket.io");
// const io = new Server(server);

//Storage multer

const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, "uploads")
  },
  filename:(req, file, cb)=>{
    cb(null, file)
  }
})

let upload = multer({storage});

//número de puerto

const PORT = process.env.PORT || 8080;

//rutas

const carritoRutas = require("./routes/carrito")
const tiendaRutas = require("./routes/productos")
const informacionRutas = require("./routes/informacion");

//seteo la plantilla

app.set("view engine", "ejs");
app.set("views", "./views")

//JSON

app.use(express.json())
app.use(express.urlencoded({decode:false}))

//ruta estática

app.use("/inicio", express.static(__dirname + '/public/')) 

//declarando las rutas correspondientes

app.use("/inicio", carritoRutas);
app.use("/inicio", tiendaRutas);
app.use("/inicio", informacionRutas);

//rutas principales

try {
  server.listen(PORT, ()=>{
    console.log("en funcionamiento.")
  })
} catch (error) {
  console.log("Se produjo el error:" + error);
}

app.get("/inicio", (req, res) => {
    res.render("pages/index");
  })

app.post("/inicio", (req, res) => {
    fs.writeFile("./administrador.txt", req.body.fav_language, "utf-8", (error)=>{
      if(error){
        console.log("Se produjo un error")
        }
    }) 
    res.render("pages/index");
})