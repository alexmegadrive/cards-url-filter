class cardService {

    constructor(products=[]) {
        this.products = products
    }

        filterBy(search ='') {
            if (!search.trim()) return data
            return this.products.filter(product => {
                return product.title.toLowerCase().includes(search.toLowerCase())
            })
            }

}