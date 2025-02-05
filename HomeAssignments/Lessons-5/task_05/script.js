let result = '';

for (let i = 1; i <= 10 ; i++)
	result += `
		<div class="input-group input-group-lg">
			<span class="input-group-text">Product # ${i}</span>
			<input type="number" class="form-control">
		</div>
	`;

let renderHTML = `
	<div class="container">
		<div class="row">
			<h4>Задача 2.</h4>
			<p>
				Створити 10 елементів для введення цін продуктів.
			</p>			
		</div>
		<div class="row row-cols-lg-3 row-cols-md-2">
			<div class="col">
				${result}
			</div>
		</div>
	</div>
`;

document.write(renderHTML);
