let btn = document.querySelector("button");
let lista = document.querySelector("ul");

let listaMichis = [...lista.children]; //transforma la lista en un array

listaMichis.forEach((item) => {
  console.log(item.textContent);
});

btn.addEventListener("click", () => {
  listaMichis.sort((a, b) => a.textContent.localeCompare(b.textContent)); //ordena alfabeticamente el arreglo.

  listaMichis.forEach((michi) => lista.appendChild(michi));
});
