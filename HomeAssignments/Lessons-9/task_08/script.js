function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function getArr(k, min, max) {
  let res = [];

  for (i = 0; i < k; i++) {
  	let el = ''
  	el += String.fromCharCode(getRandomIntInclusive(65, 90))
  	el += String.fromCharCode(getRandomIntInclusive(65, 90))
  	el += getRandomIntInclusive(0, 9)
  	el += getRandomIntInclusive(0, 9)
  	el += getRandomIntInclusive(0, 9)
  	el += getRandomIntInclusive(0, 9)
  	el += String.fromCharCode(getRandomIntInclusive(65, 90))
  	el += String.fromCharCode(getRandomIntInclusive(65, 90))

    res.push(el)
  };
  return res
}


function doMyScript() {
  let carPlatesArr = getArr(150)
  let carAPlatesArr = []
  
  carPlatesArr.forEach((el)=>{
    if (el.at(0) == 'A') carAPlatesArr.push(el)
  })

  console.log('Початковий масив: ', carPlatesArr)
  console.log('Новий масив тих, які починаються на «А»: ', carAPlatesArr)
}


if (confirm('Почати тестування?')) {
  doMyScript()
}