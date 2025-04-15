function evenOrOddChecker() {
  const number = getUserInput()

  if (isValidNumber(number)) {
    const num = parseInt(number, 10)
    const result = isEven(num) ? 'even' : 'odd'
    showResult(num, result)
  } else {
    alert('Please enter a valid number.')
  }
}

function getUserInput() {
  return prompt('Please enter a number:')
}

function isValidNumber(number) {
  return number !== null && !isNaN(number)
}

function isEven(number) {
  return number % 2 === 0
}

function showResult(number, result) {
  alert(`The number ${number} is ${result}.`)
}
