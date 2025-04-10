/*
Створити клас TBankomat, який моделює роботу банкомата. 
Клас повинен містити поля для зберігання кількості купюр кожного із номіналів від 5 до 200 гривень. 
Реалізувати методи знаходження максимальної та мінімальної сум, які може видати банкомат, 
та метод зняття деякої суми.
*/
class TBankomat {
  #denominations
  constructor() {
    this.#denominations = {
      5: 1,
      10: 0,
      20: 0,
      50: 1000,
      100: 1000,
      200: 1000,
    }
  }

  // Список длоступних номіналів
  getAvailableDenominations() {
    return Object.keys(this.#denominations)
      .filter(el => this.#denominations[el] > 0)
      .map(el => Number(el))
  }

  // знаходження максимальної сум, які може видати банкомат,
  withdrawMax() {
    return this.getAvailableDenominations()
      .reduce((acc, el) => acc += this.#denominations[el] * el, 0)
  }

  // знаходження  мінімальної сум, які може видати банкомат,
  withdrawMin() {
    return this.getAvailableDenominations()[0]
  }

  withdrawalTest(amount) {
    let withdrawMax = this.withdrawMax()
    let withdrawMin = this.withdrawMin()
    let availableDenominations = this.getAvailableDenominations()

    // Перевірка на перевищення суми
    if (amount > withdrawMax) {
      console.log(`Помилка: сума (${amount} грн) перевищує допустиму (${withdrawMax}).`)
      return false
    }

    // Перевірка на кратність
    // console.log('Перевірка на кратність:')
    if (! availableDenominations.some(el => amount % el === 0)) {
      console.log(`Помилка: сума має бути кратна ${availableDenominations.join(', ')}`)
      return false
    }

    // Тестування видачі
    let denominations = Object.assign({}, this.#denominations);
    let banknotesRemaining = {}
    let amountRemaining = amount

    for (let i = availableDenominations.length - 1; i >= 0; i--) {
      let el = availableDenominations[i]
      // console.log(el)
      while (amountRemaining >= el && denominations[el] > 0) {
        // console.log('amountRemaining : ', amountRemaining)
        amountRemaining -= el
        denominations[el]--
        banknotesRemaining[el] = banknotesRemaining[el] ?
          banknotesRemaining[el] + 1 : 1
      }
      // console.log(banknotesRemaining)
    }
    if (amountRemaining) {
      console.log(`Помилка. :((( Сума ${amount} не доступна до видачі. Спробуйте іншу суму.`)
      return false
    }

    return true
  }

  // метод зняття деякої суми.
  withdraw(amount) {
    if (! this.withdrawalTest(amount)) {
      return
    }

    let banknotesRemaining = {}
    let amountRemaining = amount
    let availableDenominations = this.getAvailableDenominations()

    for (let i = availableDenominations.length - 1; i >= 0; i--) {
      let el = availableDenominations[i]
      // console.log(el)
      while (amountRemaining >= el && this.#denominations[el] > 0) {
        // console.log('amountRemaining : ', amountRemaining)
        amountRemaining -= el
        this.#denominations[el]--
        banknotesRemaining[el] = banknotesRemaining[el] ?
          banknotesRemaining[el] + 1 : 1
      }
      // console.log(banknotesRemaining)
    }
    console.log(`Видано: ${amount}`)
  }

toString() {
    return `Банкомат ТОВ Cat&Co.` 
  }
}

let myTBankomat = new TBankomat()

console.log(`Максимальна сума, яку може видати банкомат: ${myTBankomat.withdrawMax()}.`) 
console.log(`Мінімальна сума, яку може видати банкомат: ${myTBankomat.withdrawMin()}.`)
myTBankomat.withdraw(200) 
myTBankomat.withdraw(110) 
myTBankomat.withdraw(155) 
myTBankomat.withdraw(150) 
myTBankomat.withdraw(500) 
myTBankomat.withdraw(170) 
