// Допоміжна функція: генерації випадкових чисел
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Допоміжна функція: генерація масиву
function getWinningAmount(k) {
  let res = [];

  for (i = 0; i < k; i++) {
    res.push(getRandomIntInclusive(-500, 500))
  };

  return res
}


function doMyHomeWork() {
	//генерується масив з виграшами, 
	//перший елемент масиву (з індексом 0) участі у розіграші не примає
	let winningAmount = getWinningAmount(101); 

	let winningSum = 0; // сюди будуть сумуватися результати кожного розіграшу
	let bet; // ставка - (індекс 1-100) на який ставить користувач

	while (bet = parseInt(prompt('Виберіть номер елемента (1-100)'))) {
		winningSum += winningAmount[bet]
	};

	renderHTML = `
		Ви виграли ${winningSum}.
	`;
	document.write(renderHTML);
}

if (confirm('Почати тестування?')) {
	doMyHomeWork()
}
