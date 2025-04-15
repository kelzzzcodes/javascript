function guessTheNumberGame() {
  const randomNumber = getRandomNumber()
  const userGuess = getUserGuess()

  if (userGuess === null) return

  const resultMessage =
    userGuess === randomNumber
      ? 'You guessed right!'
      : `Wrong guess. The number was ${randomNumber}.`

  alert(resultMessage)
}

function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1
}

function getUserGuess() {
  const input = prompt('Guess a number between 1 and 5:')
  const guess = parseInt(input, 10)

  if (isNaN(guess) || guess < 1 || guess > 5) {
    alert('Please enter a valid number between 1 and 5.')
    return null
  }

  return guess
}
