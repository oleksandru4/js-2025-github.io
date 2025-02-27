function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function getTableBody(rowNumber, colNumber) {
	let renderHTML = ``;

	for(let row = 1; row <= rowNumber; row++){
		renderHTML += '<tr>';
			for(let col = 1; col <= colNumber; col++){
				renderHTML += `<td>Рядок: ${row}/ стовпець: ${col}</td>`;
			};
		renderHTML += '</tr>';
	}

	return renderHTML
}


function doMyHomeWork() {
	let row = getRandomIntInclusive(2, 10);
	let col = getRandomIntInclusive(2, 10);
	let renderHTML = '';

	renderHTML = `
		<p>
		   К-ть рядків: ${row}
		   К-ть стовпців: ${col} <br>
		</p>

		<table class="blueTable">
		    <tbody>
					${getTableBody(row, col)}
		    </tbody>
		</table>
	`;
	document.write(renderHTML);
}


if (confirm('Почати тестування?')) {
	doMyHomeWork()
}