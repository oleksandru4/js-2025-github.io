// реалізація через звичайні функції була б більш простішою, але на смак і колір всі фломастери різні :)

class CurrencyConverter {
  constructor(currencyRate){
    this.uahSum = document.querySelector('#uahSum')
    this.eurSum = document.querySelector('#eurSum')
    this.usdSum = document.querySelector('#usdSum')
    this.currencyRate = currencyRate

    // this.ushOninput = this.editUAH.bind(this) // фіксується контекст
    // this.uahSum.oninput = this.ushOninput
    //v-2: фіксується контент без "проміжної" змінної
    this.editUAH = this.editUAH.bind(this)
    this.uahSum.oninput = this.editUAH

    this.editEUR = this.editEUR.bind(this)
    this.eurSum.oninput = this.editEUR

    this.editUSD = this.editUSD.bind(this)
    this.usdSum.oninput = this.editUSD
  }

  editUAH(){
    // console.log(this)
    if (this.uahSum.valueAsNumber) {
      // console.log(this)
      this.eurSum.valueAsNumber = Math.floor((this.uahSum.valueAsNumber / this.currencyRate.eur) * 100) / 100
      this.usdSum.valueAsNumber = Math.floor((this.uahSum.valueAsNumber / this.currencyRate.usd) * 100) / 100
    } else{
      this.eurSum.valueAsNumber = 0
      this.usdSum.valueAsNumber = 0
    }
  }

  editEUR(){
    if (this.eurSum.valueAsNumber) {
      console.log(this.eurSum.valueAsNumber, ' : ', this.currencyRate.uah)
      this.uahSum.valueAsNumber = Math.floor((this.eurSum.valueAsNumber * this.currencyRate.eur) * 100) / 100
      this.usdSum.valueAsNumber = Math.floor((this.uahSum.valueAsNumber / this.currencyRate.usd) * 100) / 100
    } else {
      this.uahSum.valueAsNumber = 0
      this.usdSum.valueAsNumber = 0
    }
  }

  editUSD(){
    if (this.usdSum.valueAsNumber) {
      this.uahSum.valueAsNumber =Math.floor((this.usdSum.valueAsNumber * this.currencyRate.usd) * 100) / 100
      this.eurSum.valueAsNumber =Math.floor((this.uahSum.valueAsNumber / this.currencyRate.eur) * 100) / 100
    } else {
      this.uahSum.valueAsNumber = 0
      this.eurSum.valueAsNumber = 0
  } }
}


let currencyRate = {
 uah: 1, 
 eur: 47, 
 usd: 41.5,
}

window.onload = function() {
  let myConverter = new CurrencyConverter(currencyRate)
}