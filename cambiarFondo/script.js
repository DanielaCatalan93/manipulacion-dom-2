let btn = document.querySelector("button");
let fondo = document.querySelector(".fondo");

let fondos = ["./img/cyberpunk.jpg", "./img/sefirot.jpg", "./img/thelast.jpg"];

btn.addEventListener("click", () => {
  let cambiarFondo = fondos[Math.floor(Math.random() * fondos.length)];

  fondo.src = cambiarFondo;
});
