function getRandomNumber() {
  return Math.round(Math.random() * 100)
}


function getSum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4
}


function getMultiply(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4
}


function getAverage(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4
}


function getMinimum(num1, num2, num3, num4) {
  return Math.min(num1, num2, num3, num4)
}

function doMyScript() {
  let num1 = getRandomNumber();
  let num2 = getRandomNumber();
  let num3 = getRandomNumber();
  let num4 = getRandomNumber();

  let renderHTML = `
    <p>
      Числа: ${num1}, ${num2}, ${num3}, ${num4}.
    </p>
    <ul>
      <li>сума: ${getSum(num1, num2, num3, num4)}</li>
      <li>добуток: ${getMultiply(num1, num2, num3, num4)}</li>
      <li>середнє арифметичне: ${getAverage(num1, num2, num3, num4)}</li>
      <li>мінімальне значення: ${getMinimum(num1, num2, num3, num4)}</li>
    </ul>
  `;
  document.write(renderHTML);
}


if (confirm('Почати тестування?')) {
  doMyScript()
}