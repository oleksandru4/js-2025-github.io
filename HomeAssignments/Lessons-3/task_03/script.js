let randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);
let bet = parseInt(prompt("Вгадайте число від 1 до 5:"));
let answer = 'Ви вгадали 🤩';

if (randomNumber != bet) {
	bet = parseInt(prompt("Перша спроба була не вдалою, 🤨 спробуйте ще раз:"));
	if (randomNumber != bet)
		answer = 'Ви не вгадали 🥺';
}

let renderHTML = `
	<h3>Задача 3.</h3>
	<p>
		Випадковим чином генерується число від 1 до 5.
		Спробуйте вгадати число за 2 спроби.
	</p>
		${answer}
	</p>
`;
document.write(renderHTML);