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


function getSubArray(rowStartIndex, rowEndIndex, colStartIndex, colEndIndex, arr, stepRow=1, stepCol=1) {
  let res = []

  for (let i = rowStartIndex; i <= rowEndIndex; i+=stepRow) {
    for (let j = colStartIndex; j <= colEndIndex; j+=stepCol) {
      res.push(arr[i][j])
    }
  }

  return res
}


let rowLength = 4
let colLength = 7
let min = 1
let max = 500
let arr = get2dimensionalArrayRandomNumbers(rowLength, colLength, min, max)
let sum = getSumIn2dimensionalArray

console.log('Масив: ', arr)

console.log('загальний прибуток кожного масиву за тиждень')
arr.forEach((el, indx)=>{
  console.log(`Прибуток маг. №${indx + 1} = ${el.reduce((totalProfit, profit) => totalProfit + profit)}`)
})

console.log('загальний прибуток усіх магазинів по дняx')
for (let i = 0; i < colLength; i++) {
  console.log(`Прибуток магазинів за ${i + 1} день: ${sum(0, rowLength-1, i, i, arr)}`)
}

console.log(`загальний прибуток за робочі дні: ${sum(0, rowLength-1, 0, 4, arr)}`)

console.log(`загальний прибуток за вихідні дні: ${sum(0, rowLength-1, 5, 6, arr)}`)

console.log(`максимальний прибуток за середу: ${Math.max(...getSubArray(0, rowLength-1, 2, 2, arr))}`)

console.log('сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200:')
console.log(arr.flat().filter((el) => el > 200))

console.log('відсортувати кожен магазин за зростанням')
console.log(arr.map(row => [...row].sort((a, b) => a - b)))

console.log('відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні')
console.log(arr.map(row =>[...row]).sort((a, b) => Math.max(...b) - Math.max(...a)) )

console.log('упорядкувати тижні (рядки) за спаданням суми елементів у рядку')
console.log(arr.map(row =>[...row]).sort((a, b) =>  {return (b.reduce((sum, el) => sum + el) - a.reduce((sum, el) => sum + el))}) )

// gimVisitor.forEach((el)) =>{
//   if (!el.filter(userId).length )  return false
// }
// return true
