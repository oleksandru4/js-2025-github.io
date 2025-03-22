function getArrayRandomNumbers(length, min, max) {
  let res = []

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    res.push(randomNumber)
  }

  return res
}

function createHtmlLayouts(arr, arrStyle, ...ind) {

  res = '<div>'
  arr.forEach((el, index) => {
    let elStyle = (ind.includes(index))? arrStyle : 'light'
    res += `<span class="btn btn-${elStyle}">${el}</span>`
  })
  res += '</div>'
  return res
}


function bubbleSortAndCount(...arr) {
  let renderHTML = `
    <div class="col-lg-auto mb-3">
      <div class="text-center">
        <span>Cортування бульбашкою</span>
      </div>
  `
  let comparisonsCounter = 0
  let interchangeCounter = 0
  let n = arr.length

  for (let i = 0; i < n; i++) {
    let swapped = false

    for (let j = 0; j < n - i - 1; j++) {
      comparisonsCounter++
      renderHTML += createHtmlLayouts(arr, 'warning', ...[j ,j + 1])

      if (arr[j] > arr[j + 1]) {
        interchangeCounter++
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true
        renderHTML += createHtmlLayouts(arr, 'success', ...[j ,j + 1])
      }
    }

    if (swapped === false) break
  }
  renderHTML += `
      <div>
        <span>
          Кількість порівнянь: ${comparisonsCounter}<br>
          Кількість обмінів: ${interchangeCounter}
        </span>
      </div>
    </div>
  `
  return renderHTML
}


function cocktailSortAndCount(...arr) {
  let renderHTML = `
    <div class="col-lg-auto mb-3">
      <div class="text-center">
        <span>Cортування змішуванням</span>
      </div>
  `
  let start = 0
  let end = arr.length - 1
  let comparisonsCounter = 0
  let interchangeCounter = 0
  let interchange = true

  while (interchange) {
    interchange = false
    for (let i = start; i < end; ++i) {
      comparisonsCounter++
      renderHTML += createHtmlLayouts(arr, 'warning', ...[i ,i + 1])
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1], interchange] = [arr[i + 1], arr[i], true]
        interchangeCounter++
        renderHTML += createHtmlLayouts(arr, 'success', ...[i ,i + 1])
      }
    }

    if (!interchange) break

    interchange = false
    end--
    for (let i = end-1; i >= start; --i) {
      comparisonsCounter++
      renderHTML += createHtmlLayouts(arr, 'warning', ...[i ,i + 1])
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1], interchange] = [arr[i + 1], arr[i], true]
        interchangeCounter++
        renderHTML += createHtmlLayouts(arr, 'success', ...[i ,i + 1])
      }
    }

    start++
  }
  renderHTML += `
      <div>
        <span>
          Кількість порівнянь: ${comparisonsCounter}<br>
          Кількість обмінів: ${interchangeCounter}
        </span>
      </div>
    </div>
  `
  return renderHTML
}

function insertionSortAndCount(...arr) {
  let renderHTML = `
    <div class="col-lg-auto mb-3">
      <div class="text-center">
        <span>Cортування включеннями</span>
      </div>
  `
  let comparisonsCounter = 0
  let interchangeCounter = 0
  let n = arr.length

  for (let i = 1; i < n; i++) {
    let activeEl = arr[i]
    let j = i - 1
    comparisonsCounter++
    // renderHTML += createHtmlLayouts(arr, interchangeStyle, ...[i])

    while (j >= 0 && arr[j] > activeEl) {
      arr[j + 1] = arr[j]
      renderHTML += createHtmlLayouts(arr, 'warning', ...[j ,j + 1])
      comparisonsCounter++ 
      j--
    }

    arr[j + 1] = activeEl
    interchangeCounter++
    renderHTML += createHtmlLayouts(arr, 'success', ...[j+1])
  }
  renderHTML += `
      <div>
        <span>
          Кількість порівнянь: ${comparisonsCounter}<br>
          Кількість обмінів: ${interchangeCounter}
        </span>
      </div>
    </div>
  `
  return renderHTML
}


// Генерується масив
let randomArr = getArrayRandomNumbers(6, 1, 1000)

document.write(`<div class="row justify-content-around">`)
document.write(bubbleSortAndCount(...randomArr))
document.write(cocktailSortAndCount(...randomArr))
document.write(insertionSortAndCount(...randomArr))
document.write(`</div>`)