const product = {
    name: 'Pantalón',
    price: 23200,
    stock :9
}

let nombre =  product.name
let nameChange = product.name = 'Zapato'

delete product.stock

product.categoria = 'Calzado'

console.log(product);
