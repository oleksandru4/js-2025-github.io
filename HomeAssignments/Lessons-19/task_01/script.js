function coloredLowerSiblings(ev) {
  let el = ev.target
  //якщо клік між дівами, то нічого не спрацьовує
  if (!el.classList.contains('text-white')) return

  let newClassName = 'p-3 mb-2 text-white justify-content-sm-center text-center bg-danger'
  while(el.nextElementSibling) {
    el.nextElementSibling.className = newClassName
    el = el.nextElementSibling
  }
}

window.onload = function() {
  document.querySelector('.task-container').onclick = coloredLowerSiblings
}