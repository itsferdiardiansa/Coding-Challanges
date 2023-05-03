function generatePrimeNumbers(num: number): number[] {
  const numbers = []

  for (let i = 2; i <= num; i++) {
    numbers.push(i)

    // console.log('I: ', i)
    for (let j = 2; j <= (i / 2); j++) {

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

function getPrimeNumber(n: number): number {
  for (let i = n; i < (n / 2); i++) {
    console.log(n)
    if (n % i === 0) {
      console.log('N: ', i)
      return i
    }
  }

  return -1
}

console.log('Output: ', generatePrimeNumbers(100))
// console.log('Output: ', getPrimeNumber(5))
// console.log(Math.sqrt(5))

// console.log('Output: ', recursiveGeneratePrimeNumber(100))