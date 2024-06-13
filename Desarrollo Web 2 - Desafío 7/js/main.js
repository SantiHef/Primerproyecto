const productNames = ['Pantalones', 'Remeras', 'Zapatos']

for (const productName of productNames) {
  const h2 = document.createElement('h2')
  h2.innerText = productName
  document.body.appendChild(h2)
}
