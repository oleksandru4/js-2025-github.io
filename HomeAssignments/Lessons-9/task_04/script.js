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
  let arr = getArr(20, 1, 500)
  document.write(`Масив: ${arr} <br><br>`)
  for (let el of arr) {
    if (el > 100) document.write(`100 < ${el} ;<br>`)
  }
}


if (confirm('Почати тестування?')) {
  doMyScript()
}