function getSeason(monthNumber) {
  let res = '';

  if (monthNumber >= 3 && monthNumber <= 5) {
    res = "Весна";
  } else if (monthNumber >= 6 && monthNumber <= 8) {
    res = "Літо";
  } else if (monthNumber >= 9 && monthNumber <= 11) {
    res = "Осінь";
  } else {
    res = "Зима";
  }

  return res
}

function doMyScript() {
  let inputMonthNumber = parseInt(prompt('Номер місяця', 1))
  if (inputMonthNumber < 1 || inputMonthNumber > 12) {
    document.write("Не коректно введений місяць")
  } else {
    document.write(`Сезон: ${getSeason(inputMonthNumber)}`)
  }
}

if (confirm('Почати тестування?')) {
  doMyScript()
}