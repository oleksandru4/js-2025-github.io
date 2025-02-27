/*
------------------------------------------------------------------------
!!! Зробив через масиви, тему по яких ми проходили на наступному занятті
------------------------------------------------------------------------
*/

//Допоміжна функція для генерації випадкових чисел
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}


// Генерація масиву з показниками температур [-40: 40]
function getTemperatureReadings() {
	let res = []
	for (let i = 0; i < getRandomIntInclusive(10, 50); i++) {
		if (Math.random() > 0.5) {
			res.push(getRandomIntInclusive(0, 40))
		} else {
			res.push(0 - getRandomIntInclusive(0, 40))
		}
	}
	return res
}


// Підрахунок середнього значення для додатних елементів в масиві.
function getAveragePositive(arr) {
	let positiveSum = 0;
	let positiveCount = 0;

  for (let i = 0; i < arr.length; i++) {
  	if (arr[i] > 0) {
      positiveSum += arr[i];
      positiveCount++;
  	};
  };

  return positiveSum / positiveCount
}


function doMyHomeWork() {
	let temperatureReadings = getTemperatureReadings();
	document.write(`Показники температури: ${temperatureReadings}`)
	document.write(`<br>Cереднє значення для додатних показів температури: 
		${getAveragePositive(temperatureReadings).toFixed(2)}`)
}

if (confirm('Почати тестування?')) {
	doMyHomeWork()
}
