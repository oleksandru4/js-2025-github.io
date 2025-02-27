let child1 = prompt('Введіть перше ім’я', '');
let numberСandies1 = parseInt(prompt(`Введіть к-ть цукерок у ${child1}`, 0));
let child2 = prompt('Введіть друге ім’я', '');
let numberСandies2 = parseInt(prompt(`Введіть к-ть цукерок у ${child2}`, 0));
let answer = 'Цукерок порівну';

if (isNaN(numberСandies1) || isNaN(numberСandies1))
	answer = 'Ввели не правильні цукерки :('
else if (numberСandies1 > numberСandies2 )
	answer = `У ${child1} цукерок більше.`
else if (numberСandies1 < numberСandies2)
	answer = `У ${child2} цукерок більше.`
	
let renderHTML = `
	<h3>Задача 1.</h3>
	<p>
		З клавіатури вводяться імена двох дітей та кількість у них цукерок.
		Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою,
		або вивести, що кількість однакова.
	</p>
	<p>
		${answer}
	</p>
`;
document.write(renderHTML);