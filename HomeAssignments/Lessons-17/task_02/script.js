class CompanyCar {
  constructor(driver, brand, licensePlate) {
    if (CompanyCar.instance) {
      return CompanyCar.instance;
    }

    this.driver = driver;
    this.licensePlate = licensePlate;
    this.brand = brand;
    CompanyCar.instance = this;
  }

  toString() {
    return `Автомобіль ${this.brand}, ${this.licensePlate}, ${this.driver}`
  }
}


let car1 = new CompanyCar("Іван Петрович", "Toyota", "AA 1234 БВ")
let car2 = new CompanyCar("Марія Іванівна", "Ford", "КІ 5678 ОП")
console.log("Автомобіль 1:", car1.toString())
console.log("Автомобіль 2:", car2.toString())