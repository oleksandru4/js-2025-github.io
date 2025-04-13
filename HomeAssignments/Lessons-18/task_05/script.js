function renderTable() {
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
}