let product1Quantity = parseFloat(prompt('Молоко к-ть:', 0));
let product1Price = parseFloat(prompt('Молоко ціна:', 1));
let product2Quantity = parseFloat(prompt('Кефір к-ть:', 0));
let product2Price = parseFloat(prompt('Кефір ціна:', 1));
let product3Quantity = parseFloat(prompt('Сирок Дружба к-ть:', 0));
let product3Price = parseFloat(prompt('Сирок Дружба ціна:', 1));

let product1Сost = product1Quantity * product1Price;
let product2Сost = product2Quantity * product2Price;
let product3Сost = product3Quantity * product3Price;

let renderHTML = `
	<h3>Задача 6.</h3>
	<p>
		 З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. 
		 <br>Обчислити вартість кожного товару окремо та загальну вартість.
		 <br>Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
	</p>

	<table class="customTable">
	  <thead>
	    <tr>
	      <th colspan="4"><img src="logo.png" alt="logo"></th>
	    </tr>
	  </thead>
	  <tbody>
	    <tr>
	      <td>Молоко</td>
	      <td>Х ${product1Quantity}</td>
	      <td class="text-right">${product1Price.toFixed(2)}</td>
	      <td class="text-right">${product1Сost.toFixed(2)}</td>
	    </tr>
	    <tr>
	      <td>Кефір</td>
	      <td>Х ${product2Quantity}</td>
	      <td class="text-right">${product2Price.toFixed(2)}</td>
	      <td class="text-right">${product2Сost.toFixed(2)}</td>
	    </tr>
	    <tr>
	      <td>Сирок Дружба</td>
	      <td>Х ${product3Quantity}</td>
	      <td class="text-right">${product3Price.toFixed(2)}</td>
	      <td class="text-right">${product3Сost.toFixed(2)}</td>
	    </tr>
	    <tr class="delimiter">
	      <td colspan="4"></td>
	    </tr>
	    <tr>
	      <td colspan="3">Всього найменувань:</td>
	      <td class="text-right">3</td>
	    </tr>
	    <tr>
	      <td>До сплати:</td>
	      <td colspan="3" class="text-right"> ${(product1Сost + product2Сost + product3Сost).toFixed(2)}грн</td>
	    </tr>
	    <tr class="delimiter">
	      <td colspan="4">Куплений товар поверненню не підлягає</td>
	    </tr>
	    <tr >
	      <td colspan="4">І пам'ятайте: життя як касова стрічка, а ваші скарги нікого не цікавлять</td>
	    </tr>
	  </tbody>
	</table>
`;
document.write(renderHTML);