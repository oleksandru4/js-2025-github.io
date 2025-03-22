function getRandomArrayRandomNumbers(length, min, max) {
  let res = []

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    res.push(randomNumber)
  }

  return res
}


function get2dimensionalArrayRandomNumbers(rowLength, colLength, min, max) {
  let res = []

  for (let i = 0; i < rowLength; i++) {
    res.push(getRandomArrayRandomNumbers(colLength, min, max))
  }

  return res
}


function getSumIn2dimensionalArray(rowStartIndex, rowEndIndex, colStartIndex, colEndIndex, arr, stepRow=1, stepCol=1) {
  let res = 0

  for (let i = rowStartIndex; i <= rowEndIndex; i+=stepRow) {
    for (let j = colStartIndex; j <= colEndIndex; j+=stepCol) {
      res += arr[i][j]
    }
  }

  return res
}


let rowLength = 8
let colLength = 8
let min = 0
let max = 1
let arr = get2dimensionalArrayRandomNumbers(rowLength, colLength, min, max)
let sum = getSumIn2dimensionalArray

console.log('Масив: ', arr)

console.log('номери рядків від 0 до половини, стовпці від 0 до половини:')
console.log(sum(0, rowLength/2 - 1, 0, colLength/2 - 1, arr))

console.log('номери рядків від 0 до половини, стовпці від половини до кінця')
console.log(sum(0, rowLength/2 - 1, colLength/2, colLength-1, arr))

console.log('номери рядків (від половини до кінця, стовпці від 0 до половини')
console.log(sum(rowLength/2, rowLength- 1, 0, colLength/2 - 1, arr))

console.log('номери рядків від половини до кінця , стовпці від половини до кінця')
console.log(sum(rowLength/2, rowLength- 1, colLength/2, colLength-1, arr))

console.log('Суму парних рядків')
console.log(sum(1, rowLength- 1, 0, colLength-1, arr, 2))

console.log('Суму непарних стовпців')
console.log(sum(0, rowLength- 1, 0, colLength-1, arr, 1, 2))

console.log('У парних рядках – непарні стовпці')
console.log(sum(1, rowLength- 1, 0, colLength-1, arr, 2, 2))
console.log('У непарних рядках – парні стовпці')
console.log(sum(0, rowLength- 1, 0, colLength-1, arr, 2, 2))