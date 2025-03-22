function getArrayRandomNumbers(length, min, max) {
  let res = []

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    res.push(randomNumber)
  }

  return res
}


function cocktailSortAndCount(...arr) {
  let start = 0
  let end = arr.length - 1
  let comparisonsCounter = 0
  let interchangeCounter = 0
  let interchange = true

  while (interchange) {
    interchange = false
    for (let i = start; i < end; ++i) {
      comparisonsCounter++
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1], interchange] = [arr[i + 1], arr[i], true]
        interchangeCounter++
      }
    }

    if (!interchange) break

    interchange = false
    end--
    for (let i = end-1; i >= start; --i) {
      comparisonsCounter++
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1], interchange] = [arr[i + 1], arr[i], true]
        interchangeCounter++
      }
    }

    start++
  }
  return [arr, comparisonsCounter, interchangeCounter]
}


// Генерується масив
let randomArr = getArrayRandomNumbers(30, 1, 100)

// Сортування та підрахунок
let [sortedArr, comparisonsCounter, interchangeCounter]  = cocktailSortAndCount(...randomArr)

// Результати
console.log("Початковий масив:", randomArr)
console.log("Відсортований масив:", sortedArr)
console.log("Кількість порівнянь:", comparisonsCounter)
console.log("Кількість обмінів:", interchangeCounter)