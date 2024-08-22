function handleCopyTextOutputToInputText() {
  const outputText = document.getElementById('output-message__output-text')
  const inputText = document.getElementById('form-text__input')

  navigator.clipboard.writeText(outputText.value)
  alert(`Texto ${outputText.value} copiado com sucesso`)

  outputText.value = ''

  hiddenElementById('container__output-message')
  showElementById('container__no-message')
}
