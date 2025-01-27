const currentYear = 2025;
let birthYear = parseFloat(prompt('Введіть рік Вашого народження', 2000));
let renderHTML = `
	<p>
		<b>Задача 2.</b> 
		Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
	</p>
	<p>
		Вам виповнилось(ться) ${currentYear - birthYear} років.
	</p>
`;
document.write(renderHTML);