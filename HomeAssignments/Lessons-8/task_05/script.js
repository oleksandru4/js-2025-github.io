// Допоміжна функція: генерації випадкових чисел
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function getGrades(k) {
  let res = [];

  for (i = 0; i < k; i++) {
    res.push(getRandomIntInclusive(2, 5))
  };

  return res
}


function getTwosGrades(grades) {
	let res = 0;

	for (i = 0; i < grades.length; i++) {
		if (grades[i] == 2) {
			res++
		};
	}

	return res
}


function getGoodGrades(grades) {
	let res = 0;

	for (i = 0; i < grades.length; i++) {
		if (grades[i] >= 4) res++
	}

	return res
}


function getAverageGrade(grades) {
	let sum = 0;

	for (i = 0; i < grades.length; i++) {
		sum += grades[i]
	};

	return sum ? sum / grades.length : sum
}


function getBelowAverageGrades(grades, average) {
	let res = 0;

	for (i = 0; i < grades.length; i++) {
		if (grades[i] < average) {res++}
	};

	return res
}


function doMyHomeWork() {

	let grades = getGrades(20);

	let renderHTML = `
		<p>
			Послідовність оцінок учня: ${grades}
		</p>
		<ul>
			<li>двійок: ${getTwosGrades(grades)};</li>
			<li>кількість хороших оцінок (добре, відмінно): ${getGoodGrades(grades)};</li>
			<li>кількість оцінок, які нижче середнього: ${getBelowAverageGrades(grades, getAverageGrade(grades))}.</li>
		</ul>
	`;
	document.write(renderHTML);
}

if (confirm('Почати тестування?')) {
	doMyHomeWork()
}