const htmlService = new HTMLService()
// const cardServices = new cardService()


const cardsContainer = document.getElementById('cards')
const filterInput = document.getElementById('filter')


async function startApplication() {
    // renderCart()
    const link = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7'

    const response = await fetch(link)
    const data = await response.json()
   
    cardService = new cardService(data)
    renderProducts(cardService.cards)

   
}

startApplication()

function renderProducts(products) {
    cardsContainer.innerHTML = htmlService.paintProducts(products)
}

