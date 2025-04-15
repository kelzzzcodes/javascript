function gradeChecker() {
  const score = parseInt(prompt('Enter your score (0–100):'), 10)

  if (isNaN(score) || score < 0 || score > 100) {
    return alert('Please enter a valid score between 0 and 100.')
  }

  const message =
    score >= 70 ? 'Excellent' : score >= 50 ? 'Good' : 'Needs Improvement'

  alert(message)
}
