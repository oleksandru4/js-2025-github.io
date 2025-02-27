function isWorkday(dayNumber) {
  return dayNumber >= 1 && dayNumber <= 5
}


function doMyScript() {
  let inputDayhNumber = parseInt(prompt('Введіть номер дня (від 1 до 7)', 1))
  if (inputDayhNumber < 1 || inputDayhNumber > 7) {
    document.write("Не коректно введений номер дня")
    return
  }
 
  let days = isWorkday(inputDayhNumber) ? 'робочий' :'вихідний';
  document.write(`Це ${days} день. `)
}


if (confirm('Почати тестування?')) {
  doMyScript()
}