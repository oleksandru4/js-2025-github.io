/*
Задача 3. Розробити клас MultChecker для перевірки таблиці множення
	Поля:
	- Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7
	- Кількість правильних відповіде
	- Кількість неправильних відповіде
	Методи:
	- Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
	- Перевірка правильності вказаної відповіді
	- render - виведення інформації про тестування на екран
*/

class MultChecker {
  constructor(number) {
    this.number = number
    this.correctAnswers = 0
    this.incorrectAnswers = 0
  }

  // Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
  generateExample() { 
    this.secondNumber = Math.floor(Math.random() * 10) + 1
    this.correctResult = this.number * this.secondNumber
    return `${this.number} * ${this.secondNumber} = ?`
  }

  // Перевірка правильності вказаної відповіді
  checkAnswer(answer) {
    if (answer === this.correctResult) {
      this.correctAnswers++
      return true
    } else {
      this.incorrectAnswers++
      return false
    }
  }

  // виведення інформації про тестування на екран
  render() {
    console.log(`Перевірка таблиці множення на ${this.number}`)
    console.log(`Правильних відповідей: ${this.correctAnswers}`)
    console.log(`Неправильних відповідей: ${this.incorrectAnswers}`)
  }
}

if (confirm('Почати тестування?')) {

  let myMultChecker = new MultChecker(7)

  for(let i = 0; i < 3; i++){
    let myExample = myMultChecker.generateExample()
    let userAnswer = parseInt(prompt(myExample))
    let isCorrect = myMultChecker.checkAnswer(userAnswer)
  }

  myMultChecker.render()
}