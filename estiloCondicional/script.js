let btnRojo = document.querySelector(".btnRojo");
let btnAzul = document.querySelector(".btnAzul");
let btnVerde = document.querySelector(".btnVerde");
let texto = document.querySelectorAll("li");

function cambiarFondoRojo() {
  btnRojo.addEventListener("click", () => {
    texto.style.backgroundColor === "yellow"
      ? (texto.style.backgroundColor = "red")
      : (texto.style.backgroundColor = "yellow");
  });
}

cambiarFondoRojo();

function cambiarFondoAzul() {
  btnAzul.addEventListener("click", () => {
    texto.style.backgroundColor === "yellow"
      ? (texto.style.backgroundColor = "blue")
      : (texto.style.backgroundColor = "yellow");
  });
}

cambiarFondoAzul();

function cambiarFondoVerde() {
  btnVerde.addEventListener("click", () => {
    texto.style.backgroundColor === "yellow"
      ? (texto.style.backgroundColor = "green")
      : (texto.style.backgroundColor = "yellow");
  });
}

cambiarFondoVerde();
