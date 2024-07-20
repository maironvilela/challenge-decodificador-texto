function handleEncrypt() {
  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault()
  })

  const inputText = document.getElementById('input-text')
  const hashMessage = encrypt(inputText.value)

  const outputText = document.getElementById('output_text')
  outputText.innerHTML = hashMessage

  hiddenElementById('container__empty-message')
  showElementById('container__not-empty-message')

  inputText.value = ''
}

function encrypt(plainMessage) {
  const messageArray = plainMessage.split('')

  const letterArray = ['a', 'e', 'i', 'o', 'u']
  const letterEncrypt = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',
  }
  const result = messageArray.map((letter) => {
    return letterArray.includes(letter) ? letterEncrypt[letter] : letter
  })

  return result.join('')
}

function decrypt(hashMessage = 'maiimesrobern vimeslenterlai') {
  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault()
  })

  let result = ''
  let palavra = hashMessage.split('')
  let arrayAuxiliar = []
  let aux = ''

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
        } else {
          result = result + palavra[0]
          palavra.splice(0, 1)
        }

        break
      case 'e':
        aux = arrayAuxiliar.splice(0, 5)
        if (aux.join('') === 'enter') {
          result += 'e'
          palavra.splice(0, 5)
        } else {
          result = result + palavra[0]
          palavra.splice(0, 1)
        }
        break
      case 'i':
        console.log('Entrada: ', palavra)
        aux = arrayAuxiliar.splice(0, 4)
        if (aux.join('') === 'imes') {
          result += 'i'
          palavra.splice(0, 4)
        } else {
          result = result + palavra[0]
          palavra.splice(0, 1)
        }
        console.log('Saida: ', palavra)

        break
      case 'o':
        aux = arrayAuxiliar.splice(0, 4)
        if (aux.join('') === 'ober') {
          result += 'o'
          palavra.splice(0, 4)
        } else {
          result = result + palavra[0]
          palavra.splice(0, 1)
        }
        break
      case 'u':
        aux = arrayAuxiliar.splice(0, 4)
        if (aux.join('') === 'ufat') {
          result += 'e'
          palavra.splice(0, 4)
        } else {
          result = result + palavra[0]
          palavra.splice(0, 1)
        }
        break
      default:
        result = result + palavra[0]
        palavra.splice(0, 1)
    }
  }

  console.log('result: ' + result)
  console.log('FIm')
}

function hiddenElementById(id) {
  const element = document.getElementById(id)
  element.classList.add('hidden')
}

function showElementById(id) {
  const element = document.getElementById(id)
  element.classList.remove('hidden')
}
