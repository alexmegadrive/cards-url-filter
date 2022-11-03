class cardService {

    constructor(cards=[]) {
        this.cards = cards
    }

        filterBy(search ='') {
            if (!search.trim()) return data
            return this.cards.filter(card => {
                return card.title.toLowerCase().includes(search.toLowerCase())
            })
            }

}