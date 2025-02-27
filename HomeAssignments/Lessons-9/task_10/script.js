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
  let pricesArr = getArr(20, 1, 1000)
  let taxArr = pricesArr.map(el => (el / 6).toFixed(2)) //Для зручності округляю до сотих

  document.write(`Масив масив цін з ПДВ у грн: <br>${pricesArr} <br><br>`)
  document.write(`Масив, який містить величину сплаченого податку у грн: <br>${taxArr}`)
}


if (confirm('Почати тестування?')) {
  doMyScript()
}