let age = parseInt(prompt('Вік (років):', 8));
let answer = '';

switch (true) {
	case age < 6:
		answer = 'дошкільнятко'
		break;
	case age < 18:
		answer = 'школяр'
		break;
	case age < 23:
		answer = 'студент'
		break;
	case age < 65:
		answer = 'працівник'
		break;
	default:
		answer = 'пенсіонер'
		break;
};

let renderHTML = `
	<h3>Задача 4.</h3>
	<p>
		З клавіатури вводиться вік людини.
		Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
	</p>
	<p>
		Привіт, ${answer}!
	</p>
`;
document.write(renderHTML);