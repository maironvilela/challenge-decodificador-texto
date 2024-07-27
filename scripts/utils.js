function hiddenElementById(id) {
  const element = document.getElementById(id)
  element.classList.add('hidden')
}

function showElementById(id) {
  const element = document.getElementById(id)
  element.classList.remove('hidden')
}
