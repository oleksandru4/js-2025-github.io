/*
  Задача 2. Створити об’єкт «Авто».
    Поля(властивості):
    - Марка
    - Розмір бака
    - Кількість наявних літрів
    - Кількість місць
    - Кількість пасажирів
    Методи (дії):
    - Заправка на вказану кількість літрів
    - Виведення кількості пасажирів
    - Додавання пасажирів 
    - Висадка пасажирів 
*/

let car = {
  brand: 'Toyota',
  fuelTankSize: 50,
  fuelLevel: 10,
  seatsNum: 4,
  passengersNum: 2,

  refueling: function(liters) {
    if (this.fuelLevel + liters <= this.fuelTankSize) {
      this.fuelLevel += liters
      console.log(`Заправлено ${liters} літрів, палива у баку: ${this.fuelLevel} літрів`)
    } else {
      console.log('Недостатньо місця в баку!')
    }
  },

  showPassengers: function() {
    console.log(`Кількість пасажирів: ${this.passengersNum}`)
  },

  addPassengers: function(count) {
    if (this.passengersNum + count <= this.seatsNum) {
      this.passengersNum += count
      console.log(`Посаджено ${count} пасажирів, пасажирів в авто: ${this.passengersNum}`)
    } else {
      console.log('Недостатньо місць!')
    }
  },

  removePassengers: function(count) {
    if (this.passengersNum < count) {
      count = this.passengersNum
    }
      this.passengersNum -= count
      console.log(`Висаджено ${count} пасажирів, пасажирів в авто: ${this.passengersNum}`)
  },
};

//-----------------------------------------

car.refueling(30);
car.showPassengers();
car.addPassengers(2);
car.removePassengers(1);