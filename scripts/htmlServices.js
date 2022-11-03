function cutString(string = '', maxLength = 38) {
    if (string.length > maxLength) {
        return string.substring(0, maxLength) + '...'
    }
    return string
}

class HTMLService {

    paintProduct(product) {
        return `
        <li class="card" data-id="${product.id}">
            <span><strong>${cutString(product.title)}</strong></span>
            <span>${product.body}</span>
            <input class="card-checkbox" type="checkbox">
        </li>`
    }

    paintProducts(products = []) {
        return products.map(this.paintProduct).join('')
    }

}