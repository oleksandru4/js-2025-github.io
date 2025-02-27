function getRandomNumber() {
  res =  Math.round(Math.random() * 1000)
  return Math.random() > 0.5 ? res : -res
}


function evenCount(num1, num2, num3) {
  let res = 0;

  if (num1 % 2 === 0)
    res++
  if (num2 % 2 === 0)
    res++
  if (num3 % 2 === 0)
    res++

  return res
}


function positiveCount(num1, num2, num3) {
  let res = 0;
  if (num1 > 0)
    res++
  if (num2 > 0)
    res++
  if (num3 > 0)
    res++

  return res
}


function greater100Count(num1, num2, num3) {
  let res = 0;
  
  if (num1 > 100)
    res++
  if (num2 > 100)
    res++
  if (num3 > 100)
    res++

  return res
}


function analyzeNumbers(typeCount, num1, num2, num3) {
  return typeCount(num1, num2, num3)
}


function doMyScript() {
  let num1 = getRandomNumber();
  let num2 = getRandomNumber();
  let num3 = getRandomNumber();

  let renderHTML = `
    <p>
      Задані числа: ${num1}, ${num2}, ${num3}.
    </p>
    <ul>
      <li>кількість парних: ${analyzeNumbers(evenCount, num1, num2, num3)}</li>
      <li>кількість додатних: ${analyzeNumbers(positiveCount, num1, num2, num3)}</li>
      <li>кількість більших за 100: ${analyzeNumbers(greater100Count, num1, num2, num3)}</li>
    </ul>
  `;
  document.write(renderHTML);
}


if (confirm('Почати тестування?')) {
  doMyScript()
}