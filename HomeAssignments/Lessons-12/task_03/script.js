function getArrayRandomNumbers(length, min, max) {
  let res = []

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    res.push(randomNumber)
  }

  return res
}


function insertionSortAndCount(...arr) {
  let comparisonsCounter = 0
  let interchangeCounter = 0
  let n = arr.length

  for (let i = 1; i < n; i++) {
    let activeEl = arr[i]
    let j = i - 1
    comparisonsCounter++

    while (j >= 0 && arr[j] > activeEl) {
      arr[j + 1] = arr[j]
      j--
      interchangeCounter++
      comparisonsCounter++ 
    }

    arr[j + 1] = activeEl
  }
  return [arr, comparisonsCounter, interchangeCounter]
}

// Генерується масив
let randomArr = getArrayRandomNumbers(30, 1, 100)

// Сортування та підрахунок
let [sortedArray, comparisonsCounter, interchangeCounter] = insertionSortAndCount(...randomArr)

// Результати
console.log("Початковий масив:", randomArr)
console.log("Відсортований масив:", sortedArray)
console.log("Кількість порівнянь:", comparisonsCounter)
console.log("Кількість обмінів:", interchangeCounter)