function basicCalculator() {

  const firstNumber = getNumberInput('Enter first number:')
  if (firstNumber === null) return


  const operator = getOperatorInput()
  if (!operator) return


  const secondNumber = getNumberInput('Enter second number:')
  if (secondNumber === null) return


  const result = calculate(firstNumber, operator, secondNumber)
  if (result === null) return 

  showResult(result)
}

function getNumberInput(promptMessage) {
  const input = prompt(promptMessage)
  const number = parseFloat(input)

  if (isNaN(number)) {
    alert('Please enter a valid number.')
    return null
  }
  return number
}

function getOperatorInput() {
  const operator = prompt('Enter operator (+, -, *, /):')

  if (!['+', '-', '*', '/'].includes(operator)) {
    alert('Invalid operator. Please use one of the following: +, -, *, /.')
    return null
  }
  return operator
}

function calculate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber
    case '-':
      return firstNumber - secondNumber
    case '*':
      return firstNumber * secondNumber
    case '/':
      if (secondNumber === 0) {
        alert('Cannot divide by zero.')
        return null
      }
      return firstNumber / secondNumber
    default:
      return null
  }
}

function showResult(result) {
  alert(`Result: ${result}`)
}
