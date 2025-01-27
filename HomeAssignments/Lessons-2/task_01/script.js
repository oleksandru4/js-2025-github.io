let a = parseFloat(prompt('Введіть число a', 0));
let b = parseFloat(prompt('Введіть число b', 0));
let renderHTML = `
	<div class="table_component" role="region" tabindex="0">
		<table>
		    <caption>
				<p>
					<b>Задача 1.</b> 
					Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
				</p>
		    </caption>
		    <thead>
		        <tr>
		            <th>Число a</th>
		            <th>Число b</th>
		            <th>Сума</th>
		            <th>Добуток</th>
		            <th>Частка</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr>
		            <td>${a}</td>
		            <td>${b}</td>
		            <td>${a + b}</td>
		            <td>${a * b}</td>
		            <td>${a / b}</td>
		        </tr>
		    </tbody>
		</table>
	</div>
`;
document.write(renderHTML);