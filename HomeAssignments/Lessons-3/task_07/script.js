let numberMonth = parseInt(prompt('Введіть порядковий номер місяця (1-12)', 1));
let answer = '';

switch (true) {
	case numberMonth == 12 || numberMonth < 3:
		answer = 'Зараз зима';
		break;
	case numberMonth < 6:
		answer = 'Зараз весна';
		break;
	case numberMonth < 9:
		answer = 'Зараз літо';
		break;
	case numberMonth < 12:
		answer = 'Зараз осінь';
		break;
	default:
		answer = 'Не коректно введені дані';
		break;
}

let renderHTML = `
	<h3>Задача 7.</h3>
	<p>
		З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
	</p>
	<p>
		${answer}.
	</p>
`;
document.write(renderHTML);