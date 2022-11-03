const htmlService = new HTMLService()
const cardsContainer = document.getElementById('cards')
const filterInput = document.getElementById('filter')
const resultsTitle = document.getElementById('results-title')
const params = (new URL(document.location)).searchParams;
const query = params.get("query") || null;

startApplication()

async function startApplication() {
    const link = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7'
    const response = await fetch(link)
    const data = await response.json()
    cardService = new cardService(data)

    if (query) {
        const filteredProducts = cardService.filterBy(query)
        resultsTitle.innerText = (filteredProducts.length > 0) ? `Результаты по запросу "${query}"` : `Ничего не найдено по запросу "${query}"`;
        renderProducts(filteredProducts)
    } else renderProducts(cardService.cards)

}

function renderProducts(cards) {
    cardsContainer.innerHTML = htmlService.paintProducts(cards)
}

function applyFilter() {
    location.href = filterInput.value ? `./index.html?query=${filterInput.value}` : `./index.html`
}

document.body.addEventListener('click', function (event) {
    if (event.target.type == 'checkbox') {
        const parent = event.target.closest('li')
        parent.classList.toggle('card--checked')
    }
})