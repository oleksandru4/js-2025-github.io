function changeClickCounter(ev) {
    let tableId = ev.currentTarget.id
    let counter = document.querySelector(`[for="${tableId}"]`)

    if (! counter.innerText) counter.innerText = 0
    counter.innerText = Number(counter.innerText) + 1
    ev.currentTarget.classList.toggle('blackTable')
    ev.currentTarget.classList.toggle('redTable')
}


window.onload = function() {
    document.querySelectorAll('table')
        .forEach(el => el.onclick = changeClickCounter)
}