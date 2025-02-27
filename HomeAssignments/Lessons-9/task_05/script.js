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
  let arr = getArr(10, -10, 10)
  let product = 1
  document.write(`Масив: ${arr} <br><br>`)
  for (let el of arr) {
  	if (el > 0) product *= el
  }
  document.write(`Добуток додатних елементів: ${product}`)
}


if (confirm('Почати тестування?')) {
  doMyScript()
}