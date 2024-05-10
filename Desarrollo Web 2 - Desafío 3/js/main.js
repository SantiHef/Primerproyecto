function sumarProductos(precioUnitario, cantidadDeseada) {

    let totalGastado = precioUnitario * cantidadDeseada
    return totalGastado
}


let precio = 500;
let cantidad = prompt("¿Cuántos alfajores quiere comprar?")
let totalCompra = sumarProductos(precio,cantidad)
console.log("El total gastado es de $" + totalCompra);



