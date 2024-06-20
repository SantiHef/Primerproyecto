const counter_cart = document.getElementById('counter_cart')
const container_products = document.getElementById('container_products')

getProducts()

function getProducts() {}
    products.forEach(item => {
        
        const content_products = document.createElement('div')
        content_products.classList.add('card')
        content_products.innerHTML = `
            <h2>${item.titulo}</h2>
            <img src="${item.image}">
            <h2>${item.precio}</h1>
            <button class="btn_carts" value="${item.id}">Comprar</button>
        ` 

        container_products.appendChild(content_products)
    });











