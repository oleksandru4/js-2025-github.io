
let numberSeconds = parseFloat(prompt('к-ть секунд:', 48119));

let numberHours = Math.floor(numberSeconds / 3600);
console.log(numberHours) // Результат = 13 (ціла частина від 48119 / 3600 = 13.3664)

// тепер розраховуються секунди, які залишились (із початкових 48119)
// після того, минули 13 годин

let numberDeltaSeconds = numberSeconds % 3600; 

console.log(numberDeltaSeconds) // Результат = 1319 (3600*13 + 1319 = 48119)

// Тепер ми знаємо, що якщо з початку доби пройшло 48119 секунд, це значить, 
// що в ці 48119 секунд входить 13 годин і ще 1319 секунд
// а 1319 секунд це в чвою чергу буде ...
let numberMinutes = Math.floor(numberDeltaSeconds / 60);
console.log(numberMinutes) // Результат = 21 (ціла частина від 1319 / 60 = 21.9833)

// Таким чином ми получаємо, що якщо з початку доби минуло 48119 секунд,
// то це буде повних 13 годин і 21 хвилина.
// Це все- рівно, що якщо у вас є наручний електронний годинник то через 48119 секудн
// після початку нової доби він показуватиме 13:21 (тобто 13 годин і 21 хвилину).
// Звісно, там ще буде якийсь хвостик секунд, але нам його не потрібно виводити за умовами задачі.

//Виводимо результат:

document.write(`Від початку доби минуло ${numberHours} год. i ${numberMinutes} хв.`);


// let renderHTML = `
// 	<h3>Задача 5.</h3>
// 	<p>
// 		Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
// 	</p>
// 	<p>
// 		Від початку доби минуло ${numberHours} год. i ${numberMinutes-60*numberHours} хв.
// 	</p>
// `;


// document.write(renderHTML);
// let numberSeconds = parseFloat(prompt('к-ть секунд:', 48119));
// let numberMinutes = Math.floor(numberSeconds / 60);
// let numberHours = Math.floor(numberMinutes / 60);
// let renderHTML = `
// 	<h3>Задача 5.</h3>
// 	<p>
// 		Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
// 	</p>
// 	<p>
// 		Від початку доби минуло ${numberHours} год. i ${numberMinutes-60*numberHours} хв.
// 	</p>
// `;
// document.write(renderHTML);