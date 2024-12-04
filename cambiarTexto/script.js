let btn = document.querySelector("button");
let texto = document.querySelector("h1");

btn.addEventListener("click", () => {
  texto.innerHTML === "Texto original"
    ? (texto.innerHTML = "Texto cambiado")
    : (texto.innerHTML = "Texto original");
});
