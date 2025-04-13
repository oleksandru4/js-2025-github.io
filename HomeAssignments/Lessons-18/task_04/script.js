class WishesGenerator{
    constructor(wishList, numberOfWishesToShow=0) {
        this.wishList = wishList
        this.numberOfWishesToShow = numberOfWishesToShow
        this.selectedWishes = {}
    }

    getRandomIndex() {
        return Math.floor(Math.random() * this.wishList.length)
    }

    selectWishes() {
        while (Object.keys(this.selectedWishes).length < this.numberOfWishesToShow) {
            let key = this.getRandomIndex()
            // console.log(key)
            this.selectedWishes[key] = this.wishList[key]
        }
    }

    displayWishes(){
        let ulEl = document.createElement('ul')
        ulEl.className = 'list-group list-group-flush'

        for (let key in this.selectedWishes) {
            let liEl = document.createElement('li')
            liEl.classList = ['list-group-item']
            liEl.innerText = this.selectedWishes[key]
            ulEl.append(liEl)
        }
        document.querySelector('.wish-list').append(ulEl)
    }
}

let wishes = [
    "Подорож до Японії",
    "Новий ноутбук",
    "Вивчити іспанську мову",
    "Стрибок з парашутом",
    "Прочитати 100 книг",
    "Власний будинок на березі моря",
    "Навчитись грати на гітарі",
    "Здати марафон",
    "Зустріти улюбленого актора",
    "Посадити дерево"
]

window.onload = function() {
    let myWishesGenerator = new WishesGenerator(wishes, 3)
    myWishesGenerator.selectWishes()
    myWishesGenerator.displayWishes()
}