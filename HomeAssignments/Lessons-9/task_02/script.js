function doMyScript() {
  let arrLength = parseInt(prompt("Введіть к-ть елементів:", 10))
  let middleIndx = Math.floor(arrLength / 2)
  let arr = new Array(arrLength)

  arr.fill(1, 0, middleIndx);
  arr.fill(7, middleIndx);

  console.log(middleIndx)
  console.log(arr)
}


if (confirm('Почати тестування?')) {
  doMyScript()
}