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
    return letterArray.includes(letter)
      ? characterToEncryptedToken[letter]
      : letter
  })

  return result.join('')
}

function hiddenElementById(id) {
  const element = document.getElementById(id)
  element.classList.add('hidden')
}

function showElementById(id) {
  const element = document.getElementById(id)
  element.classList.remove('hidden')
}

function handleDecrypt() {
  document
    .getElementById('main__form-text')
    .addEventListener('submit', function (event) {
      event.preventDefault()
    })

  hiddenElementById('container__no-message')
  showElementById('container__output-message')
  const inputText = document.getElementById('form-text__input')
  const hashMessage = inputText.value

  const charactersArray = ['a', 'e', 'i', 'o', 'u']
  let encryptedTextInArray = hashMessage.split('')
  const result = rec(encryptedTextInArray, charactersArray, '')

  const outputText = document.getElementById('output-message__output-text')
  outputText.value = result
  inputText.value = ''
}

function rec(array, charactersArray, result) {
  const characterToEncryptedToken = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',
  }

  let character = ''
  let token = ''
  let letterAndSplice = {}

  if (array.length === 0) {
    return result
  }

  if (!charactersArray.includes(array[0])) {
    result += array[0]
    array.splice(0, 1)
    return rec(array, charactersArray, result)
  }

  switch (array[0]) {
    case 'a':
      character = 'a'
      token = characterToEncryptedToken[character]
      break

    case 'e':
      character = 'e'
      token = characterToEncryptedToken[character]
      break

    case 'i':
      character = 'i'
      token = characterToEncryptedToken[character]
      break

    case 'o':
      character = 'o'
      token = characterToEncryptedToken[character]
      break

    case 'u':
      character = 'u'
      token = characterToEncryptedToken[character]
      break
  }
  letterAndSplice = getLetterAndSplice([...array], token, character)
  result += letterAndSplice.character
  array.splice(0, letterAndSplice.splice)
  return rec(array, charactersArray, result)
}

function getLetterAndSplice(array, token, letter) {
  let character = ''
  let splice = 1
  let aux = array.splice(0, token.length)

  if (aux.join('') === token) {
    character = letter
    splice = token.length
  } else {
    character = aux[0]
    console.log(aux[0])
  }
  return { character, splice }
}

function handleCopyTextOutputToInputText() {
  const outputText = document.getElementById('output-message__output-text')
  const inputText = document.getElementById('form-text__input')
  inputText.value = outputText.value
  outputText.value = ''

  hiddenElementById('container__output-message')
  showElementById('container__no-message')
}
