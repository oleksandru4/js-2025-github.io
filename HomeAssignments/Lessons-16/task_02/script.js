class TMoney {
  #dollarAmount
  #dollarRateUAH

  constructor() {
    this.#dollarAmount = 0
    this.#dollarRateUAH = 41
    console.log('Створено новий рахунок')
  }
  
  addMoneyUAH(uahMoney) {
    let dollarEquivalent = uahMoney / this.#dollarRateUAH
    this.#dollarAmount += dollarEquivalent
    console.log(`Додано ₴${uahMoney.toFixed(2)}. На Вашому рахунку $${this.#dollarAmount.toFixed(2)}`)
  }

  subtractingMoneyUAH(uahMoney) {
    let dollarEquivalent = uahMoney / this.#dollarRateUAH
    
    if (this.#dollarAmount >= dollarEquivalent) {
      this.#dollarAmount -= dollarEquivalent
      console.log(`Вилучено ₴${uahMoney.toFixed(2)}. На Вашому рахунку $${this.#dollarAmount.toFixed(2)}`)
    } else {
        console.log(`Не достатньо коштів на Вашому рахунку :( `)
    }
  }

  toString() {
    return `На рахунку $${this.#dollarAmount.toFixed(2)}, поточний коурс usd/uah: ${this.#dollarRateUAH}` 
  }

}

let myAcc = new TMoney()
myAcc.addMoneyUAH(100000)
myAcc.subtractingMoneyUAH(2500)
myAcc.subtractingMoneyUAH(250000)
console.log(String(myAcc))