function generatePrimeNumbers(num) {
  const numbers = []

  for (let i = 2; i <= num; i++) {
    numbers.push(i)

    for (let j = 2; j <= (i / 2); j++) {
      // console.log('I: ', i, j)

      if (i % j === 0) {
        numbers.pop()
        break
      }

    }
    // console.log('             ')
    // console.log('=============')
    // console.log('             ')
  }

  return numbers
}

console.log(generatePrimeNumbers(100))