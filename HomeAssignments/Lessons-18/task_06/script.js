function changeRating() {
    let containerTable = document.querySelector('.render-table')
    let span = containerTable.querySelector('.average-value')
    let ratingList = containerTable.querySelectorAll('input')
    let sumValue = 0

    ratingList.forEach((el) => {
        if (el.valueAsNumber)
            sumValue += el.valueAsNumber
    })
    span.innerText = sumValue / ratingList.length
}


function getGradeNumber() {
    let gradeNumberValue = document.querySelector('#gradeNumber').valueAsNumber
    if (gradeNumberValue) 
        return gradeNumberValue
    return 0
}


function renderTableContainer() {
    // v.1: через createElement 😱🤯

    // let tableEl = document.createElement('table')
    // tableEl.className="table"

    // let theadEl = document.createElement('thead')
    // let trEl = document.createElement('tr')
    // let th1El = document.createElement('th')
    // th1El.innerText = '#'
    // let th2El = document.createElement('th')
    // let span1El = document.createElement('span')
    // span1El.innerText = 'Середня оцінка:'
    // let span2El = document.createElement('span')
    // span2El.className = 'average-value'

    // tableEl.append(theadEl)
    // theadEl.append(trEl)
    // trEl.append(th1El)
    // trEl.append(th2El)
    // th2El.append(span1El)
    // th2El.append(span2El)
    // document.querySelector('.render-table').append(tableEl)

    // v.2: через innerHTML (і життя стає простішим 🙂)

    let renderHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Середня оцінка : &nbsp &nbsp <span class="average-value"></span></th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    `
    document.querySelector('.render-table').innerHTML = renderHTML


}

function renderTable() {
    let rowNumber = getGradeNumber()
    let containerTable = document.querySelector('.render-table')
    if (! rowNumber) {
        containerTable.innerHTML = ''
        return
    }

    renderTableContainer()
    let renderHTML = ''

    for (let i = 0; i < rowNumber; i++) {
        renderHTML += `
            <tr>
                <th scope="row">${i+1}</th>
                <td >
                    <div class="col-auto">
                        <input type="number" class="form-control">
                    </div>
                </td>
            </tr>
        `
    }

    containerTable.querySelector('tbody').innerHTML = renderHTML
    containerTable.querySelectorAll('input').forEach((el)=>{
        el.onchange = changeRating
    })
}



window.onload = function() {
    document.querySelector('.get-table').onclick = renderTable
}