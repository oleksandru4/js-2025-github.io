/*
Задача 5. Розробити клас «Керівник танців»
Поля:
- Масив імен хлопців
- Масив імен дівчат
Методи:
- Метод випадкового вибору імені хлопця
- Метод випадкового вибору імені дівчини
- Метод виведення пари для танців
- Метод run, який ініціює через кожні 5 секунд виведення нової пари для танців
*/


class DanceManager {
  constructor(boysList, girlsList) {
    this.boysList = boysList
    this.girlsList = girlsList
  }

  getRandomBoy() {
    let randomIndex = Math.floor(Math.random() * this.boysList.length)
    return this.boysList[randomIndex]
  }

  getRandomGirl() {
    let randomIndex = Math.floor(Math.random() * this.girlsList.length)
    return this.girlsList[randomIndex]
  }

  displayPair() {
    let boy = this.getRandomBoy()
    let girl = this.getRandomGirl()
    console.log(`Пара для танців: ${boy} і ${girl}`)
  }

  run() {
    setInterval(() => {
      this.displayPair()
    }, 5000)
  }

}

// ----------------------------------------------------------
let boys = ['Іван', 'Петро', 'Андрій', 'Олег', 'Дмитро']
let girls = ['Марія', 'Ольга', 'Наталія', 'Тетяна', 'Ірина']
let danceManager = new DanceManager(boys, girls)

if (confirm('Почати тестування?'))
  danceManager.run()