"use strict";

var colorAleatorio = function colorAleatorio() {
  var numeroAleatorio = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  return numeroAleatorio;
};

var rgb = function rgb(r, g, b) {
  return "Tus colores son: \nRojo: ".concat(r, "\nVerde: ").concat(g, "\nAzul: ").concat(b);
};

var color = rgb(colorAleatorio(), colorAleatorio(), colorAleatorio());
console.log(color);