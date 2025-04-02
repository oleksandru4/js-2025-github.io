/*
Задача 1. Створити об’єкт «Тир». 
У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
Поля(властивості):
  Масив, у якому зберігається поле з зайцями
Методи (дії):
  Метод пострілу (задається позиція пострілу),
  Виведення ігрового поля
*/

let shootingRange = {
  field: [1, 1, 0, 1, 0],
  displayField () {
    console.log(...this.field)
  },

  shoot (index) {
    if (this.field[index] === 1) {
      console.log(`🍖 Ви влучили (позиція: ${index})!`)
      this.field[index] = 0 // Приьираємо зайця
    } else {
      console.log(`🐰 Ви промахнулись (позиція: ${index}).`)
    }
  },
}

console.log('Ігрове поле до пострілів:')
shootingRange.displayField()

shootingRange.shoot(2)
shootingRange.shoot(0)

console.log('Ігрове поле після пострілів:')
shootingRange.displayField()