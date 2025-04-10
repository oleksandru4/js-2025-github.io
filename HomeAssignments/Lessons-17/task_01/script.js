class ArrOperations {
  static getPositiveNumbers(arr) {
    return arr.filter(num => num > 0).length
  }

  static getNegativeNumbers(arr) {
    return arr.filter(num => num < 0).length
  }

  static getOccurrencesNumbers(arr, el) {
    return arr.filter(num => num === el).length
  }
}


let numberList = [1, -2, 3, 0, -4, 5, 3, -1, 3, 9, 0, 7, 2, -6]

console.log(`Масив: ${numberList.join(', ')}`)
console.log(`Кількість додатних чисел: ${ArrOperations.getPositiveNumbers(numberList)}`)
console.log(`Кількість від'ємних чисел: ${ArrOperations.getNegativeNumbers(numberList)}`)
console.log(`Кількість входжень числа -4: ${ArrOperations.getOccurrencesNumbers(numberList, -4)}`)