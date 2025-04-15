function multiplicationTableGenerator() {
  const input = prompt('Enter a number for multiplication table:')
  const number = parseInt(input, 10)

  if (isNaN(number)) {
    alert('Please enter a valid number.')
    return
  }

  for (let i = 1; i <= 12; i++) {
    console.log(`${number} x ${i} = ${number * i}`)
  }
}
