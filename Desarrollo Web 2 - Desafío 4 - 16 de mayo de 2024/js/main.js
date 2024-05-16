let productos = [
    {name:"tostadora", precio:15000, stock: 5},
    {name:"auriculares", precio:7000, stock: 7},
    {name:"celular", precio:10000, stock: 10},
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


