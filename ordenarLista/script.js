let btn = document.querySelector("button");
let lista = document.querySelector("ul");

let listaMichis = [...lista.children];

listaMichis.forEach((item) => {
  console.log(item.textContent);
});

btn.addEventListener("click", () => {
  listaMichis.sort((a, b) => a.textContent.localeCompare(b.textContent));

  listaMichis.forEach((michi) => lista.appendChild(michi));
});
