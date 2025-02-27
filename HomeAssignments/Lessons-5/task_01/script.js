let even = 0, odd = 0;

for (let i = 0; i < 100; i++) {
	let randomNum = Math.floor(Math.random() * (1000));
	if (randomNum%2) 
		++odd
	else
		++even
}
	
let renderHTML = `
	<h3>Задача -2.</h3>
	<p>
		Поступово генерувати 100 випадкових чисел від 1 до 1000.
		Підрахувати яких чисел більше: парних чи непарних.
	</p>
	<p>
		У вибірці ${even} парних та ${odd} непарних чисел.
	</p>
`;
document.write(renderHTML);