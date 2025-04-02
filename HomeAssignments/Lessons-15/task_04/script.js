/*
Задача 4. Розробити клас Baner
Поля:
- Масив об’єктів ( графічних зображень та посилань на сайти)
Методи:
- Метод випадкового вибору об’єкта (графічного зображення та посилання)
- Метод виведення випадкового банера
*/

class Banner {
  constructor(bannersList) {
    this.bannersList = bannersList
  }

  getRandomBanner() {
    let randomIndex = Math.floor(Math.random() * this.bannersList.length)
    return this.bannersList[randomIndex]
  }

  displayRandomBanner() {
    let randomBanner = this.getRandomBanner()
    document.write(`<img src="${randomBanner.link}" alt="${randomBanner.image}" height="300">`)
  }
}

const bannerData = [
  { image: 'banner1', link: 'https://cdn.pixabay.com/photo/2021/08/10/18/32/cat-6536684_640.jpg' },
  { image: 'banner2', link: 'https://cdn.pixabay.com/photo/2014/08/30/18/19/cow-431729_640.jpg' },
  { image: 'banner3', link: 'https://cdn.pixabay.com/photo/2018/11/29/23/34/cat-3846780_640.jpg' },
  { image: 'banner4', link: 'https://cdn.pixabay.com/photo/2021/08/10/18/32/cat-6536684_640.jpg' },
  { image: 'banner5', link: 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_640.jpg' },
  { image: 'banner6', link: 'https://cdn.pixabay.com/photo/2021/08/26/15/39/cat-6576397_640.jpg' },
  { image: 'banner7', link: 'https://cdn.pixabay.com/photo/2016/09/05/21/37/cat-1647775_640.jpg' },
  { image: 'banner8', link: 'https://cdn.pixabay.com/photo/2017/03/14/14/49/cat-2143332_640.jpg' },
  { image: 'banner9', link: 'https://cdn.pixabay.com/photo/2013/05/30/18/21/cat-114782_640.jpg' },
]

let myBanner = new Banner(bannerData)
for (let i = 0; i < bannerData.length; i++) {
  myBanner.displayRandomBanner()
}
  
