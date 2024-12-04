let btnAgregar = document.querySelector("button");
let btnEliminar = document.querySelector(".btnEliminar");
let listaTareas = document.querySelector("ul");
let tarea = document.querySelector("li");
let checkbox = document.querySelector("input[type='checkbox']");

let lista = [];

// Evento para agregar una tarea a la lista.

btnAgregar.addEventListener("click", () => {
  let input = document.querySelector("input").value;

  lista.push(input);

  let html = `
  <ul class="container">
  <li>${input}</li>
  </ul>`;

  listaTareas.innerHTML += html;

  document.querySelector("input").value = "";
});
