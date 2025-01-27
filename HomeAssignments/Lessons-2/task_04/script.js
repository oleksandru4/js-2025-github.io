let lengthSm = parseFloat(prompt('Довжина, см:', 0));
let renderHTML = `
	<h3>Задача 4.</h3>
	<p>
		Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
	</p>
	<p>
		Довжина в см: ${lengthSm}см.;
		<br>Довжина в м: ${lengthSm / 100}м.;
		<br> Довжина в км: ${lengthSm / 100000}км.;
	</p>
`;
document.write(renderHTML);