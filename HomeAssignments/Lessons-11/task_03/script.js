function getBattlefield(size) {
  let res = []

  for (let i = 0; i <= size; i++) {
    res[i] = Array(size+1).fill('🌊');
  }

  return res;
}


function placeShips(battlefield, shipNumber, battlefieldSize) {
  for (i = 0; i < shipNumber; i++) {
    let x = Math.floor(Math.random() * battlefieldSize)
    let y = Math.floor(Math.random() * battlefieldSize)
    // console.log(x, '-', y)
    if (battlefield[x][y] === '🌊') battlefield[x][y] = '⛵️'
    else  i--
  }

}


function doMyScript() {
  let battlefieldSize = 5
  let shipNumber = 5
  let shotNumber = 5

  let battlefield = getBattlefield(battlefieldSize)
  console.log(battlefield)
  placeShips(battlefield, shipNumber, battlefieldSize+1)

  for(i = 0, wreckNumber = 0; i < shotNumber && wreckNumber < shipNumber; i++){
    let x = parseInt(prompt("Введіть координату X (0-5):"));
    let y = parseInt(prompt("Введіть координату Y (0-5):"));
    // припускається, що користувач вводить коректні дані

    if (battlefield[x][y] == '⛵️') {
      alert('Влучання 🔥')
      battlefield[x][y] = '🔥'
      wreckNumber++
    } else {
      alert('Промах 💦')
      battlefield[x][y] = '☔️'
    }
  }
}

if (confirm('Почати тестування?')) {
  doMyScript()
}
