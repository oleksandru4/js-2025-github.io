let result = '';

for (let i = 0; i <8 ; i++)
	result += `<button>Hello</button><br>`;

let renderHTML = `
	<h3>Задача 0.</h3>
	<p>
		Вивести на екран 8 кнопок з написом “Hello”.
	</p>
	<p>
		${result}
	</p>
`;
document.write(renderHTML);