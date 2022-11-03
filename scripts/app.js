const htmlServices = new HTMLService()
const cardServices = new cardService()


const cardsContainer = document.getElementById('cards')
const filterInput = document.getElementById('filter')


async function startApplication() {
    // renderCart()

    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
   
    productService = new ProductService(data)
    renderProducts(productService.products)

   
}

startApplication()

function renderProducts(products) {
    productsContainer.innerHTML = htmlService.paintProducts(products)
}

