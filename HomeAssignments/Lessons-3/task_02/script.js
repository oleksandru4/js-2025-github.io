let productPrice = parseFloat(prompt('Ціна товару', 1000));
let moneyAmount = parseFloat(prompt('К-ть грошей', 200));
let moneyRest = moneyAmount - productPrice;
let answer = '';

if (moneyRest < 0) {
	answer = 'На Вашому рахунку не достатньо коштів :('; 
} else if (moneyRest >= 4) {
	answer = 'Лотарейку купуєм?'; 
}

let renderHTML = `
	<h3>Задача 2.</h3>
	<p>
		З клавіатури вводиться ціна товару і кількість грошей.
		Якщо грошей не вистачає то відмовляємо у покупці,
		інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
	</p>
	<p>${answer}</p>
`;
document.write(renderHTML);