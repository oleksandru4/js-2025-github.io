let result = "";

for (let i = 3; i <=8 ; i++)
	switch (i) {
		case 3: result +=`${i} : March <br>`
			break;
		case 4: result +=`${i} : April <br>`
			break;
		case 5: result +=`${i} : May <br>`
			break;
		case 6: result +=`${i} : June <br>`
			break;
		case 7: result +=`${i} : July <br>`
			break;
		case 8: result +=`${i} : August <br>`
			break;
	}
	
let renderHTML = `
	<h3>Задача -1.</h3>
	<p>
		Вивести на екран номери місяців весни і літа (від 3 до 8).
	</p>
	<p>
		${result}
	</p>
`;

document.write(renderHTML);