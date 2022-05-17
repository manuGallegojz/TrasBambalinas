



































// const socket = io();

//     //Productos 
//     socket.on("message_backend", (data)=>{
//         if(window.location.pathname == "/api/inicio/formulario"){
//         document.querySelector("#producto").innerHTML = " ";
//         render(data)
//         socket.emit("message_cliente", "Buenas, Yo soy Robby!")
//         }
//     })

//     const render = (data)=>{
//         data.map((e)=>{
//             let producto = `
//             <div class="border border-info">
//                 <div class="card-body p-3">
//                     <img class="w-100 mb-4" src="${e.image}" alt="Producto"></img>
//                     <h6 class="card-title">${e.title}</h6>
//                     <h5 class="card-text">$ ${e.price}</h5>
//                     <small>Stock: ${e.stock}</small>
//                         <div class="border rounded d-flex col-5 justify-content-between my-2 p-0">
//                             <button class="btn btn-primary botonStock p-0 m-0 rounded text-secondary">-</button>
//                         <div>
//                             <small>1</small>
//                     </div>
//                         <button class="btn btn-primary botonStock p-0 rounded text-secondary">+</button>
//                     </div>
//                     <a href="#" class="btn btn-primary">Añadir al carrito</a>
//                 </div>
//             </div>   
//             `
//             document.querySelector("#producto").innerHTML += producto;
//         })
//     }

//     //Chat

//     socket.on("chat_back", (data) => {
//     mensajes(data);
//     socket.emit("chat_mensaje", "Gracias por tu mensaje!");
//     });

//     const mensajes = (data) => {
//         console.log(data)
        
//         let html = data.map((x) => {
//         return ` 
//             <p> <strong class="text-primary">${x.email}</strong><small style="color: blue"> [${x.fecha}]</small><em style="color: green"> : ${x.mensaje} </em></p>
//         `;
//     }).join(" ");

//     document.querySelector("#chat").innerHTML = html;
//     };
//     const addInfo = () => {
//     let fecha = new Date();
//     let objeto = {
//         nombre: document.querySelector("#name").value,
//         email: document.querySelector("#email").value,
//         mensaje: document.querySelector("#message").value,
//         fecha: fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds()
//     };
//     console.log(fecha)
//     socket.emit("data_msg", objeto);
//     document.querySelector("#name").value = "";
//     document.querySelector("#email").value = "";
//     document.querySelector("#message").value = "";
//     return false;
//     };