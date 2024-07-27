function handleEncrypt() {
  document
    .getElementById('main__form-text')
    .addEventListener('submit', function (event) {
      event.preventDefault()
    })

  const inputText = document.getElementById('form-text__input')
  const hashMessage = encrypt(inputText.value)

  const outputText = document.getElementById('output-message__output-text')
  outputText.value = hashMessage

  hiddenElementById('container__no-message')
  showElementById('container__output-message')

  inputText.value = ''
}

function encrypt(plainMessage) {
  const messageArray = plainMessage.split('')

  const letterArray = ['a', 'e', 'i', 'o', 'u']
  const characterToEncryptedToken = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',
  }
  const result = messageArray.map((letter) => {
    console.log({ letter })
    return letterArray.includes(letter)
      ? characterToEncryptedToken[letter]
      : letter
  })

  return result.join('')
}
