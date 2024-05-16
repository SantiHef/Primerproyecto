let productos = [
    {name:"heladera", precio:3233, stock: 10},
    {name:"teclado", precio:3233, stock: 10},
    {name:"laptop", precio:3233, stock: 10},
]

for(let index = 0; index < productos.length; index++) {
    console.log(`${productos[index].name}); - precio : $${productos[index]. precio}
     - stock : ${productos[index].stock}`)
}

console.log("-----------------------------------")
productos.pop();//Elimina el último elemento del array
console.log("-----------------------------------")

for(let index = 0; index < productos.length; index++) {
    console.log(`${productos[index].name}); - precio : $${productos[index]. precio}
     - stock : ${productos[index].stock}`)
}


