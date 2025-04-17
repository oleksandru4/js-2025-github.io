function getRandomNumberLists(numberOfLists, maxElementsPerList, minValue, maxValue) {
    let result = []

    for (let i = 0; i < numberOfLists; i++) {
        let numberOfElements = Math.floor(Math.random() * maxElementsPerList) + 1
        let currentList = []

        for (let j = 0; j < numberOfElements; j++) {
            let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
            currentList.push(randomNumber)
        }
        result.push(currentList)
    }

  return result
}


function renderLists(randomLists) {
    document.querySelector('.task-container').innerHTML = ''
    // v-01
    // let renderHTML = ''
    // randomLists.forEach((currentList)=>{
    //     renderHTML += `
    //         <div class="col">
    //             <ol class="list-group list-group-numbered list-group-flush" data-list-length=${currentList.length}>
    //     `
    //     currentList.forEach((el)=>{
    //         renderHTML += `
    //             <li class="list-group-item d-flex justify-content-between align-items-center ">
    //                 <span class="badge bg-primary rounded-pill">${el}</span>
    //             </li>
    //         `
    //     })
    //     renderHTML += `</ol></div>`
    // })

    // v-02
    randomLists.forEach((currentList)=>{
        let div = document.createElement('div')
        div.className = 'col'
        let ol = document.createElement('ol')
        ol.className = 'list-group list-group-numbered list-group-flush'
        ol.dataset.listLength = currentList.length
        div.append(ol)

        currentList.forEach((el)=>{
            let li = document.createElement('li')
            li.className = 'list-group-item d-flex justify-content-between align-items-center'
            let span = document.createElement('span')
            span.className = 'badge bg-primary rounded-pill'
            span.innerText = el
            li.append(span)
            ol.append(li)
        })
        document.querySelector('.task-container').append(div)
    })
}


function coloredLists(argument) {
    document.querySelectorAll('[data-list-length]').forEach( el => {
        let mewClass = Number(el.dataset.listLength) % 2 ?
        'list-group-item-danger' : 'list-group-item-success'
        el.classList.add(mewClass)
    })
}


window.onload = function() {
    renderLists(randomLists)
    document.querySelector('button.colored').onclick = coloredLists
}

let numberOfLists = 5
let maxElementsPerList = 10
let minValue = 1
let maxValue = 100

let randomLists = getRandomNumberLists(numberOfLists, maxElementsPerList, minValue, maxValue)