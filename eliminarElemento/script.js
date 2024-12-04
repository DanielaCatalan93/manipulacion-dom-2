let btnEliminar = document.querySelectorAll(".btnEliminar");

btnEliminar.forEach((button) => {
  button.addEventListener("click", () => {
    let li = button.parentElement;
    li.remove();
  });
});
