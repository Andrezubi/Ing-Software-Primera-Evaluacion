import sumar from "./sumador";

const first = document.querySelector("#entrada");

const second =document.querySelector("#salida")
const form = document.querySelector("#peajes-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entrada = new Date(first.value);
  const salida = new Date(second.value);

  div.innerHTML = "<p>Entrada: " + entrada + "</p> Salida: "+salida;
});
