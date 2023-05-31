const Button = document.querySelector(".key_button");
const Prueba = "";

Button.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const value = key.dataset.valor;
  }
});
