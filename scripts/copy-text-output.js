function handleCopyTextOutputToInputText() {
  const outputText = document.getElementById('output-message__output-text')
  const inputText = document.getElementById('form-text__input')
  inputText.value = outputText.value
  outputText.value = ''

  hiddenElementById('container__output-message')
  showElementById('container__no-message')
}
