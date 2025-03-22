/*
 * за правилами гри першими ходять хрестики:
 * якщо на полі хрестиків проставлено <= ноликів, то мають ходити хрестики
 */
function firstTurn(arr) {
  let count_0 = arr.reduce((res, el)=>{
    if (el == '0') return ++res
    else return res
  }, 0)
  let count_X = arr.reduce((res, el)=>{
    if (el == 'X') return ++res
    else return res
  }, 0)

  return count_X <= count_0 ? 'X': '0'
}


function getIndexEmptyPlaces(arr) {
  res =[]
  arr.forEach( (el, index) => {
    if (el === ' ') res.push(index)
  })

  return res
}


function resOut(arr) {
  document.write(`
    <br>
  <table>
    <tr>
      <td>${arr[0]}</td>
      <td>${arr[1]}</td>
      <td>${arr[2]}</td>
    </tr>
    <tr>
      <td>${arr[3]}</td>
      <td>${arr[4]}</td>
      <td>${arr[5]}</td>
    </tr>
    <tr>
      <td>${arr[6]}</td>
      <td>${arr[7]}</td>
      <td>${arr[8]}</td>
    </tr>
  </table>
  `)
}


function makeTurn(turnNumber, currentPlayer, ...board) {
  ++turnNumber // номер поточного ходу
  let emptyPlaceArr = getIndexEmptyPlaces(board)

  emptyPlaceArr.forEach((el)=>{
    let turnBoard = [...board]
    turnBoard[el] = `${currentPlayer}<sup>${turnNumber}</sup>`
    
    if (getIndexEmptyPlaces(turnBoard).length > 0) {
      let nexPlayer = currentPlayer === '0' ?  'X' : '0'
      makeTurn(turnNumber, nexPlayer, ...turnBoard)
    } else {
      resOut(turnBoard)
    }

  })

}

// зразу для спрощення дошка поля розгортається в одновимірний масив
let initialBoard = [' ',' ',' ',' ','0','X','X','X','0']
// визначається чия черга ходу
currentPlayer = firstTurn(initialBoard)
// запускється рекурсивний перебір усіх наступних ходів
makeTurn(0, currentPlayer, ...initialBoard)