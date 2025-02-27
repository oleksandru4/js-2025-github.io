let driverLicense = prompt('Введіть категорію (A-C)', '');
let answer = '';

switch (driverLicense) {
	case 'A':
		answer = 'Можете керувати мотоциклом 🏍';
		break;
	case 'B':
		answer = 'Можете керувати легковим автомобілем 🚘';
		break;
	case 'C':
		answer = 'Можете керувати вантажним автомобілем 🚚';
		break;
	default:
		answer = 'Вітаю, ви оператор шлагбаума! 🚧';
		break;
}

let renderHTML = `
	<h3>Задача 5.</h3>
	<p>
		З клавіатури вводиться назва категорії водія
		(А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль).
		Вивести на екран назву транспортного засобу, яким він може керувати.
	</p>
	<p>
		${answer}
	</p>
`;
document.write(renderHTML);