if (confirm('Почати тестування?')) {

	let totalNum = parseFloat(prompt('Кількість випадкових чисел:', 10));
	let result = '';

	for (let i = 0; i < totalNum ; i++) {
		result += `
			<li class="list-group-item">
				${Math.floor(Math.random() * (100))}
			</li>
		`;
	}

	let renderHTML = `
		<h3>Задача 1.</h3>
		<p>
			Вивести з використанням циклів маркований список з випадковими числами (1-100).<br>
			Кількість випадкових чисел вводиться користувачем.
		</p>
		<p>
			<ul class="list-group list-group-flush">
				${result}
			</ul>		
		</p>
	`;
	document.write(renderHTML);
}
