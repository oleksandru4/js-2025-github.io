window.onload = function() {
  document.querySelector("#add").onclick = ()=>{
    res.valueAsNumber = firstNumber.valueAsNumber + secondNumber.valueAsNumber
  }

  document.querySelector("#subtract").onclick = () => {
    res.valueAsNumber = firstNumber.valueAsNumber - secondNumber.valueAsNumber
  }

  document.querySelector("#multiply").onclick = () => {
    res.valueAsNumber = firstNumber.valueAsNumber * secondNumber.valueAsNumber
  }

  document.querySelector("#divide").onclick = () => {
    try {
      res.valueAsNumber = firstNumber.valueAsNumber / secondNumber.valueAsNumber
    } catch(e) {
      alert(e)
    }
  }
}