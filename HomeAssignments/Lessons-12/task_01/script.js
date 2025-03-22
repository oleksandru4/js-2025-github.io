function getArrayRandomNumbers(length, min, max) {
  let res = []

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    res.push(randomNumber)
  }

  return res
}


function bubbleSortAndCount(...arr) {
  let comparisonsCounter = 0
  let interchangeCounter = 0
  let n = arr.length

  for (let i = 0; i < n; i++) {
    swapped = false

    for (let j = 0; j < n - i - 1; j++) {
      comparisonsCounter++

      if (arr[j] > arr[j + 1]) {
        interchangeCounter++
        [arr[j], arr[j + 1], swapped] = [arr[j + 1], arr[j], true]
      }
    }

    if (swapped === false) break
  }

  return [arr, comparisonsCounter, interchangeCounter]
}

// Генерується масив
let randomArr = getArrayRandomNumbers(30, 1, 100)

// Сортування та підрахунок
let [sortedArr, comparisonsCounter, interchangeCounter] = bubbleSortAndCount(...randomArr)

// Результати
console.log("Початковий масив:", randomArr)
console.log("Відсортований масив:", sortedArr)
console.log("Кількість порівнянь:", comparisonsCounter)
console.log("Кількість обмінів:", interchangeCounter)