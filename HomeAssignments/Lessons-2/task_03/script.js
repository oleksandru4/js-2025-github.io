let price = parseFloat(prompt('Ціна товару:', 0));
let quantity = parseFloat(prompt('К-ть товару:', 0));
let renderHTML = `
	<h>Задача 3.</h>
	<p>
		Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
	</p>
	<p>
		Загальна вартість (без ПДВ): ${(price * quantity).toFixed(2)}грн.,
		<br> ПДВ 5%: ${(price * quantity / 20).toFixed(2)} грн
	</p>
`;
document.write(renderHTML);