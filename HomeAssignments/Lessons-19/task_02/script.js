function filledAllNan(argument) {
  document.querySelectorAll('input').forEach((el) => el.value = '')
}


function filledUpperSiblings(el) {
  let valueEl = el.valueAsNumber
  while(el.nextElementSibling) {
    el.nextElementSibling.valueAsNumber = ++valueEl
    el = el.nextElementSibling
  }
}


function filledLowerSiblings(el) {
  let valueEl = el.valueAsNumber
  while(el.previousElementSibling) {
    el.previousElementSibling.valueAsNumber = --valueEl
    el = el.previousElementSibling
  }
}


function filledAllInputs(ev) {
  let el = ev.target
  let valueEl = el.valueAsNumber
  
  if (isNaN(valueEl)) {
    filledAllNan()
    return
  }

  filledLowerSiblings(el)
  filledUpperSiblings(el)
}


window.onload = function() {
  document.querySelectorAll('input').forEach((el) => el.oninput = filledAllInputs)
}