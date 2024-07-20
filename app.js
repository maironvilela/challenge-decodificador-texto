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

  console.log('result: ' + result)
  console.log('FIm')
}

//maiimesrobern vimeslenterlai
function handleDecryptRecursivo(hashMessage = 'maiimesrobern vimeslenterlai') {
  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault()
  })

  const letterArray = ['a', 'e', 'i', 'o', 'u']
  let palavra = hashMessage.split('')
  const result = rec(palavra, letterArray, '')
  console.log('resultado: ' + result)
}

function rec(array, caractersCifrados, result) {
  let arrayAuxiliar = [...array]

  if (array.length === 0) {
    return result
  }

  if (!caractersCifrados.includes(array[0])) {
    result += array[0]
    array.splice(0, 1)
    return rec(array, caractersCifrados, result)
  }

  switch (array[0]) {
    case 'a':
      aux = arrayAuxiliar.splice(0, 2)
      if (aux.join('') === 'ai') {
        result += 'a'
        array.splice(0, aux.length)
        return rec(array, caractersCifrados, result)
      } else {
        result = result + array[0]
        array.splice(0, 1)
        return rec(array, caractersCifrados, result)
      }

    case 'e':
      aux = arrayAuxiliar.splice(0, 5)
      if (aux.join('') === 'enter') {
        result += 'e'
        array.splice(0, aux.length)
        return rec(array, caractersCifrados, result)
      } else {
        result = result + array[0]
        array.splice(0, 1)
        return rec(array, caractersCifrados, result)
      }
    case 'i':
      aux = arrayAuxiliar.splice(0, 4)
      if (aux.join('') === 'imes') {
        result += 'i'
        array.splice(0, aux.length)
        return rec(array, caractersCifrados, result)
      } else {
        result = result + array[0]
        array.splice(0, 1)
        return rec(array, caractersCifrados, result)
      }
    case 'o':
      aux = arrayAuxiliar.splice(0, 4)
      console.log('Entrada: ' + array)
      if (aux.join('') === 'ober') {
        result += 'o'
        array.splice(0, aux.length)
        return rec(array, caractersCifrados, result)
      } else {
        result = result + array[0]
        array.splice(0, 1)
        return rec(array, caractersCifrados, result)
      }

    case 'u':
      aux = arrayAuxiliar.splice(0, 4)
      console.log('Entrada: ' + array)
      if (aux.join('') === 'ufat') {
        result += 'u'
        array.splice(0, aux.length)
        return rec(array, caractersCifrados, result)
      } else {
        result = result + array[0]
        array.splice(0, 1)
        return rec(array, caractersCifrados, result)
      }
  }
}

function hiddenElementById(id) {
  const element = document.getElementById(id)
  element.classList.add('hidden')
}

function showElementById(id) {
  const element = document.getElementById(id)
  element.classList.remove('hidden')
}
