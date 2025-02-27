//Допоміжна функція для генерації випадкових чисел
function getRandomNumber() {
  res =  Math.round(Math.random() * 50);
  return res
}


function CentimeterToInch (NumberCentimeter) {
	return 0.393700787 * NumberCentimeter
}


function KilogramToPound (NumberKilogram) {
	return 2.205 * NumberKilogram
}


function KilometerToMile (NumberKilometer) {
	return 0.621371192 * NumberKilometer
}


function doMyHomeWork() {
	let cm = getRandomNumber();
	let kg = getRandomNumber();
	let km = getRandomNumber();

	renderHTML = `
	<ul>
		<li>${cm} cm = ${CentimeterToInch(cm).toFixed(2)} дюймів;</li>
		<li>${kg} kg = ${KilogramToPound(kg).toFixed(2)} фунтів;</li>
		<li>${km} km = ${KilometerToMile(km).toFixed(2)} миль;</li>
	</ul>
	`;
	document.write(renderHTML);
}

if (confirm('Почати тестування?')) {
	doMyHomeWork()
}
