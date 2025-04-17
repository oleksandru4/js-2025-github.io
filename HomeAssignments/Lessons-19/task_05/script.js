function movesToSelectedList(ev) {
    if (! ev.target.closest('SVG')) return //якщо клік не на стрілку => вихід
    // li-шка переміщується у сусідній список
    let ulForSelected = document.querySelector('.for-selected')
    let tagLi = ev.target.closest('LI')
    tagLi.remove(tagLi)
    ulForSelected.append(tagLi)
    // стрілка розвертається і перефарбовується
    tagLi.querySelector('path').setAttribute('d', pathForSelected)
    tagLi.querySelector('svg').setAttribute('fill', 'red')
}


function movesToAllList(ev) {
    if (! ev.target.closest('SVG')) return //якщо клік не на стрілку => вихід
    // li-шка переміщується у сусідній список
    let ulForAll = document.querySelector('.for-all')
    let tagLi = ev.target.closest('LI')
    tagLi.remove(tagLi)
    ulForAll.append(tagLi)
    // стрілка розвертається і перефарбовується
    tagLi.querySelector('path').setAttribute('d', pathForAll)
    tagLi.querySelector('svg').setAttribute('fill', 'green')
}


window.onload = function() {
    document.querySelector('.for-all').onclick = movesToSelectedList
    document.querySelector('.for-selected').onclick = movesToAllList
}

const pathForAll = 'M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z'
const pathForSelected = 'M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z'
