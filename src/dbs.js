const knex = require("knex")({
    client:"mysql",
    connection: {
        host:"127.0.0.1",
        port: 3306,
        user: "root",
        password:"",
        database: "CotillonDb"
    },
    pool: {min:2,max:8},
})

knex.schema.createTableIfNotExists("products", function(table){
    table.increments("id").primary();
    table.string("title");
    table.string("image");
    table.string("price");
    table.string("stock");
})
.then(()=>{
    console.log("TABLA 1 funcionando")
})
.catch((err)=>{
    console.log(err)
})

knex.schema.createTableIfNotExists("cart", function(table){
    table.increments("id").primary();
    table.string("title");
    table.string("image");
    table.string("price");
    table.string("stock");
    table.string("timestamp");
})
.then(()=>{
    console.log("TABLA 2 funcionando")
})
.catch((err)=>{
    console.log(err)
})

knex.schema.createTableIfNotExists("messages", function(table){
    table.string("nombre");
    table.string("email");
    table.string("mensaje");
    table.string("timestamp");
})
.then(()=>{
    console.log("TABLA 3 funcionando")
})
.catch((err)=>{
    console.log(err)
})


module.exports = knex;