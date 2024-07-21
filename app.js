function handleEncrypt() {
  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault()
  })

  const inputText = document.getElementById('form__input-text')
  const hashMessage = encrypt(inputText.value)

  const outputText = document.getElementById('not-empty-message__output-text')
  outputText.innerHTML = hashMessage

  hiddenElementById('container__empty-message')
  showElementById('container__not-empty-message')

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
  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault()
  })

  const inputText = document.getElementById('form__input-text')
  const hashMessage = inputText.value

  const charactersArray = ['a', 'e', 'i', 'o', 'u']
  let encryptedTextInArray = hashMessage.split('')
  const result = rec(encryptedTextInArray, charactersArray, '')

  const outputText = document.getElementById('not-empty-message__output-text')
  outputText.innerHTML = result

  hiddenElementById('container__empty-message')
  showElementById('container__not-empty-message')
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
      console.log('Letra A')
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

/*
function decrypt(hashMessage = 'maiimesrobern vimeslenterlai') {
  console.time('TempoExecucao')

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault()
  })

  let result = ''
  let aux = ''
  let palavra = hashMessage.split('')
  let arrayAuxiliar = []

  while (true) {
    if (palavra.length === 0) {
      break
    }

    arrayAuxiliar = [...palavra]

    switch (palavra[0]) {
      case 'a':
        aux = arrayAuxiliar.splice(0, 2)
        console.log('Auxiliar: ' + aux.join(''))
        if (aux.join('') === 'ai') {
          result += 'a'
          palavra.splice(0, 2)
        }

        break
      case 'e':
        aux = arrayAuxiliar.splice(0, 5)
        if (aux.join('') === 'enter') {
          result += 'e'
          palavra.splice(0, 5)
        }
        break
      case 'i':
        console.log('Entrada: ', palavra)
        aux = arrayAuxiliar.splice(0, 4)
        if (aux.join('') === 'imes') {
          result += 'i'
          palavra.splice(0, 4)
        }
        console.log('Saida: ', palavra)

        break
      case 'o':
        aux = arrayAuxiliar.splice(0, 4)
        if (aux.join('') === 'ober') {
          result += 'o'
          palavra.splice(0, 4)
        }
        break
      case 'u':
        aux = arrayAuxiliar.splice(0, 4)
        if (aux.join('') === 'ufat') {
          result += 'e'
          palavra.splice(0, 4)
        }
        break
      default:
        result = result + palavra[0]
        palavra.splice(0, 1)
    }
  }

  console.timeEnd('TempoExecucao')
}
*/
