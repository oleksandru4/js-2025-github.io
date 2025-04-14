function calculateTotalCost () {
    let totalCost = 0
    document.querySelectorAll(':checked').forEach((el)=>{
        if (el.dataset.price) totalCost += Number(el.dataset.price)
    })
    document.querySelector('#total-cost').innerText = `Бюджет подорожі: €${totalCost}`
}

function addEvent(node) {
    node.forEach(el => el.onchange = calculateTotalCost)
}

window.onload = function() {
    calculateTotalCost() // виводиться бюджет за замовчуванням
    addEvent(document.querySelectorAll('input'))
    addEvent(document.querySelectorAll('select'))

/* v-1: спочатку все скидається в один масив, а потім передором вішається обробник на onchange
    Array.from(document.querySelectorAll('input'))
        .concat(Array.from(document.querySelectorAll('select')))
        .forEach(el=> el.onchange = calculateTotalCost)
*/

}