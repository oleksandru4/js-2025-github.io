let numberSeconds = parseFloat(prompt('к-ть секунд:', 48119));
let numberMinutes = Math.floor(numberSeconds / 60);
let numberHours = Math.floor(numberMinutes / 60);
let renderHTML = `
	<h3>Задача 5.</h3>
	<p>
		Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
	</p>
	<p>
		Від початку доби минуло ${numberHours} год. i ${numberMinutes-60*numberHours} хв.
	</p>
`;
document.write(renderHTML);