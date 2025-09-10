import { estaPerdido } from "./calculadorPeajes";
import { peaje } from "./calculadorPeajes";

const first = document.querySelector("#entrada");

const second =document.querySelector("#salida")
const perdido=document.querySelector("#perdido")
const form = document.querySelector("#peajes-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entrada = new Date(first.value);
  const salida = new Date(second.value);
  const esPerdido =perdido.checked;
  div.innerHTML = "<p>Entrada: " + entrada.toLocaleString() + "</p> Salida: "+salida.toLocaleString()+
  "<p> Peaje: "+ estaPerdido(entrada, salida,esPerdido)+"Bs."
});
