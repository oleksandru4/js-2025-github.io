const MIN_MONTH = 1;
const MAX_MONTH = 12;
const MIN_DAY = 0;
const MAX_DAY = 6;

let randomMonth = MIN_MONTH + Math.floor(Math.random() * (MAX_MONTH - MIN_MONTH + 1));
let randomDay = MIN_DAY + Math.floor(Math.random() * (MAX_DAY - MIN_DAY + 1));

let renderHTML = `
	<h3>Задача 7.</h3>
	<p>
		 Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
	</p>
	<p>
	Випадковий місяць: ${randomMonth}
	<br>Випадковий день: ${randomDay}
	<br>Сума: ${randomMonth + randomDay}
	</p>
`;
document.write(renderHTML);