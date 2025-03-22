function iterator(min, max) {
  let res = min

  function nextVal() {
    if (res > max) res = min
    return res++
  }

  return nextVal
}

let month = ['Січень', 'Лютий', 'Березень', 'Квітень',
  'Травень', 'Червень', "Липень", 'Серпень', 
  'Вересень', 'Жовтень', 'Листопад', 'Грудень'
  ]

let monthNumber = iterator(0, 11)
for (let i = 1; i <= 14; i++) {
  console.log(month[monthNumber()])
}



// function doMyScript() {
// }
// if (confirm('Почати тестування?')) {
  // doMyScript()
// }