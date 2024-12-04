let btn = document.querySelector("button");
let texto = document.querySelector("span");
let contador = 0;

function contadorClicks() {
  btn.addEventListener("click", () => {
    texto.innerHTML = contador++;
  });
}

contadorClicks();
