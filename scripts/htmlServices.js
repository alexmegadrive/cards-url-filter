function cutString(string = '', maxLength = 30) {
    if (string.length > 30) {
        return string.substring(0,maxLength) + '...'
    }
    return string
}

class HTMLService {

    paintProduct(product) {
        return `
        <li data-id="${product.id}">
            <small>${cutString(product.title, 30)}</small>
            <small><strong>${product.body}</strong></small>
        </li>`
    }

    paintProducts(products = []) {
        return  products.map(this.paintProduct).join('')
    }

}