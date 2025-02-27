

//Допоміжна функція для генерації випадкових чисел
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min)
}


function rendrerLogBattlefield(battlefield, shotNumber) {
	document.write(`<br>Постріл ${shotNumber}: `);
	for (let i = 0; i < battlefield.length; i++) {
		if (battlefield[i] <= 1) document.write(`🔳`)
		if (battlefield[i] == 2) document.write(`💧`)
		if (battlefield[i] == 3) document.write(`🔥`)
	}
}


function getBattlefieldLength() {
	return parseInt(prompt("Введіть к-ть клітинок:", 3))
}


function getshipsNumber() {
	return parseInt(prompt("Введіть к-ть кораблів:", 2))
}


function getBattlefield() {
	let cells = getBattlefieldLength();
	let ships = getshipsNumber();
	let battlefield = [];
	for (let i = 0; i < cells; i++) {
		battlefield[i] = 0
	}
	for (let i = 0; i < ships; i++) {
    	let place;
	    do {
	    	place = getRandomIntInclusive(0, cells-1)
	    } while (battlefield[place] == 1);
	    	battlefield[place] = 1;
  	}

  	return battlefield
}


function isLivingShip(battlefield) {
	for (let i = 0; i < battlefield.length; i++) {
		if (battlefield[i] == 1) {
			return true
		}
	}
	return false
}


function takeShot(battlefield) {
	let shot = parseInt(prompt("Введіть клітинку для пострілу: (0-2)", 0));

	if (shot >= battlefield.length) return battlefield
	if (battlefield[shot] == 1) {
		battlefield[shot] = 3;
	} else {
		battlefield[shot] = 2;
	}

	return battlefield
}


function doMyHomeWork() {
	//battlefield:
	//	0- не стріляний пустий 
	//	1- не стріляний з кораблем
	//	2- стрілляний промах
	//	3- стріляний влучання
	let battlefield = getBattlefield();
	let shotNumber = 0;
	document.write(`<br> --- Перебіг бою --- `);

	while (isLivingShip(battlefield)) {
		battlefield = takeShot(battlefield);
		shotNumber++;
		rendrerLogBattlefield(battlefield, shotNumber);
		console.log(battlefield);
	}
}

// if (true) {
if (confirm('Почати тестування?')) {
	doMyHomeWork()
}
