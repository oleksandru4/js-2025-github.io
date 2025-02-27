function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function getArr(k, min, max) {
  let res = [];

  for (i = 0; i < k; i++) {
    res.push(getRandomIntInclusive(min, max))
  };
  return res
}


function doMyScript() {
  let arr = getArr(15, 0, 5000)
  
  document.write(`Масив до: <br>${arr} <br><br>`)
  arr.forEach((el,i,arr)=>{
    if (el > 1000) arr[i] = Math.round(0.7 * el)
  })

  document.write(`Масив після: <br>${arr}`)
}


if (confirm('Почати тестування?')) {
  doMyScript()
}