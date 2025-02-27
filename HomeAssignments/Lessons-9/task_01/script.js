function doMyScript() {
  let arr = new Array(parseInt(prompt("Введіть к-ть елементів:", 10)))
  arr.fill(0)
  console.log(arr)
}


if (confirm('Почати тестування?')) {
  doMyScript()
}