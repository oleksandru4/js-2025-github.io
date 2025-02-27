let numberDay = prompt('Введіть порядковий номер дня тижня', '1');
let answer = '';

switch (numberDay) {
	case '1':
		answer = 'понеділок';
		break;
	case '2':
		answer = 'вівторок';
		break;
	case '3':
		answer = 'середа';
		break;
	case '4':
		answer = 'четвер';
		break;
	case '5':
		answer = "п'ятниця";
		break;
	case '6':
		answer = 'субота';
		break;
	case '7':
		answer = 'неділя';
		break;
	default:
		answer = 'ви перепрацювали, відпочиньте';
		break;
}

let renderHTML = `
	<h3>Задача 6.</h3>
	<p>
		З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
	</p>
	<p>
		Сьогодні ${answer}.
	</p>
`;
document.write(renderHTML);