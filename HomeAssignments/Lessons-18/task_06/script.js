/*The user specifies the number of grades and clicks the “get table” button.
 As a result, a table with input is formed, where the user enters the grades.
 After that, he clicks the “get sum” button and finds the average value.
*/

function getGradeNumber() {
    let gradeNumberValue = document.querySelector('#gradeNumber').valueAsNumber
    if (gradeNumberValue) 
        return gradeNumberValue
    return 0
}

function renderTable() {
    let rowNumber = getGradeNumber()
    if (! rowNumber) return

    let renderHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Середня оцінка: <span>sdas</span></th>
                </tr>
            </thead>
            <tbody>        
    `

    for (let i = 0; i < rowNumber; i++) {
        

    }

    renderHTML += `
            </tbody>
        </table>
    `

}


window.onload = function() {
    document.querySelector('.get-table').onClick = renderTable
}


/*function renderTable() {
    let renderHTML = `
        <table class="table">
            <tbody>
    `

    for (var i = 0; i < 3; i++) {
        renderHTML += `
            <tr>
              <td>${Math.floor(Math.random() * 1000)}</td>
              <td>${Math.floor(Math.random() * 1000)}</td>
              <td>${Math.floor(Math.random() * 1000)}</td>
              <td>${Math.floor(Math.random() * 1000)}</td>
            </tr>
        `
    }
    
    renderHTML += `
            </tbody>
        </table>
    `
    document.querySelector('.divForTable').innerHTML = renderHTML
}

window.onload = function() {
    renderTable()
}*/