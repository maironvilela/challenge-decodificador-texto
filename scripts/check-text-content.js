const input = document.querySelector('#form-text__input')
input.addEventListener('input', checkTextContent(input))

function checkTextContent(input) {
  // const regex = new RegExp(/[a-z]/)
  const regex = new RegExp(/^[a-z\s]+$/)
  input.addEventListener('keypress', function (e) {
    if (!e.key.match(regex)) {
      e.preventDefault()
      alert('Permitido apenas  letras minúsculas e sem acento')
    }
  })
}
