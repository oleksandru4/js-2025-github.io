function doMyScript() {
  let arrLength = parseInt(prompt("Введіть к-ть елементів (>5):", 10))
  let arr = new Array(arrLength)

  arr.fill(1, 0, 5);
  arr.fill(7, 5);

  console.log(arr)
}


if (confirm('Почати тестування?')) {
  doMyScript()
}