function cutString(string = '', maxLength = 38) {
    if (string.length > maxLength) {
        return string.substring(0,maxLength) + '...'
    }
    return string
}

class HTMLService {

    paintProduct(product) {
        return `
        <li data-id="${product.id}">
            <span><strong>${cutString(product.title, 38)}</strong></span>
            <span>${product.body}</span>
        </li>`
    }

    paintProducts(products = []) {
        return  products.map(this.paintProduct).join('')
    }

}