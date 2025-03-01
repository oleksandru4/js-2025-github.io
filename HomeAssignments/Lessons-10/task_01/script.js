function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function getArr(k, min, max) {
  let res = [];

  for (i = 0; i < k; i++) {
    let el = getRandomIntInclusive(min, max)
    res.push(el)
  };
  return res
}


function getMaxPrice(arr) {
  return Math.max(...arr)
}


// Масив, у якому є тільки ті, що більші за 1000 грн
function greaterVal(max, arr) {
  return arr.filter((el) => el > max)
}


// Масив, у якому є номери тільки тих, що більші за 1000 грн
function greater1000Indexes(max, arr) {
  return arr.reduce((acc, el, index)=>{
    if (el > max) 
      acc.push(index)
    return acc
  }, [])
}


//Список з тих цін, які більші за попереднє значення
function greaterThanPrevious(arr) {
  let res = arr.filter((el, index, arr)=>{
    if ((index > 0) && (el > arr[index-1])) 
      return true
    else 
    return false
  })
  return res
}


//Сформувати новий масив, що міститиме 
//значення цін у відсотках стосовно максимального
function getPercentageOfMaximum(arr) {
  let maxPrice = getMaxPrice(arr)
  return  arr.map((el)=> 100 * el / maxPrice)
}


//Підрахувати кількість змін цін
function getChangesPriceNumber(arr) {
  return arr.reduce((acc, el, index, arr)=>{
    if ( (index > 0) && (el - arr[index-1] != 0) ) 
      acc++
    return acc
  }, 0)
}


//Визначити, чи є ціна, що менше 1000
function isSomeLessThen(price, arr) {
  return arr.some((el) => el < price)
}


//Визначати, чи усі ціни більше за 1000
function isEveryGreaterThen(price, arr) {
  return arr.every((el) => el > price)
}



function doMyScript() {
  let arr = getArr(getRandomIntInclusive(1, 1000), 1, 2000)
  console.log('Початковий масив')
  console.log(arr)
  console.log('-------------------------------')
  console.log('1) Масив, у якому є тільки ті, що більші за 1000 грн: ')
  console.log(greaterVal(1000, arr))
  console.log('-------------------------------')
  console.log('2) Масив, у якому є номери тільки тих, що більші за 1000 грн: ')
  console.log(greater1000Indexes(1000, arr))
  console.log('-------------------------------')
  console.log('3) Список з тих цін, які більші за попереднє значення: ')
  console.log(greaterThanPrevious(arr))
  console.log('-------------------------------')
  console.log('4) Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального: ')
  console.log(getPercentageOfMaximum(arr).map(el => el.toFixed(2)))
  console.log('-------------------------------')
  console.log('5) Підрахувати кількість змін цін: ')
  console.log(getChangesPriceNumber(arr))
  console.log('-------------------------------')
  console.log('6) Визначити, чи є ціна, що менше 1000:')
  console.log(isSomeLessThen(1000, arr) ? 'так, є' : 'ні, немає')
  console.log('-------------------------------')
  console.log('7) Визначати, чи усі ціни більше за 1000:')
  console.log(isEveryGreaterThen(1000, arr) ? 'так, усі ціни більше за 1000' : 'ні, не всі ціни більше за 1000')
  console.log('-------------------------------')
  console.log('8) Підрахувати кількість цін, що більше за 1000')
  console.log(greaterVal(1000, arr).length)
  console.log('-------------------------------')
  console.log('9) Підрахувати суму цін, що більше за 1000')
  console.log(greaterVal(1000, arr).reduce((acc, el) => acc + el))
  console.log('-------------------------------')
  console.log('10) Знайти першу ціну, що більше за 1000')
  console.log(arr.find((el) => el > 1000))
  console.log('-------------------------------')
  console.log('11) Знайти індекс першої ціни, що більше за 1000')
  console.log(arr.findIndex((el) => el > 1000))
  console.log('-------------------------------')
  console.log('12) Знайти останню ціну, що більше за 1000')
  console.log(arr.findLast((el) => el > 1000))
  console.log('-------------------------------')
  console.log('13) Знайти індекс останньої ціни, що більше за 1000')
  console.log(arr.findLastIndex((el) => el > 1000))
  console.log('-------------------------------')

}


if (confirm('Почати тестування?')) {
  doMyScript()
}