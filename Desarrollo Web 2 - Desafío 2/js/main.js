let nombreProducto = "Lavadoras"
let precioUnitario = 5000
let cantidadDeseada = prompt("¿Cuántas lavadoras querés comprar?")
let costoFinal = cantidadDeseada * precioUnitario
let costoFinalConDescuento = costoFinal * (90/100);

if (cantidadDeseada >= 5)
{
console.log(costoFinalConDescuento);
    alert("El valor de tu compra es de" + " " + costoFinalConDescuento)
}
else {console.log(costoFinal);
    alert("El valor de tu compra es de" + " " + costoFinal)
}












    