const btnCarrito = document.getElementById('btnCarrito')
btnCarrito.innerHTML = "Agregar productos al carrito";

btnCarrito.addEventListener("click", (event) => {
  // Event triggered when the button is clicked
  const h3 = document.createElement("h3");
  h3.innerHTML = "Agregado";
  document.body.appendChild(h3);
});




