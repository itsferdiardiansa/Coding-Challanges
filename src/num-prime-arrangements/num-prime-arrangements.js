const modulo = Math.pow(10, 9) + 7

let factorial = function(num) {
  let n = 1

  if (num === 0 || num === 1) {
    return num
  }

  for (let i = 2; i <= num; ++i) {
    n = (n * i) % modulo
  }

  return n
}

/**
 * @param {number} n
 * @return {number}
 */
let numPrimeArrangements = function(n) {
  let primeNumbers = 0

  for (let i = 2; i <= n; i++) {
    let isPrime = true

    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        isPrime = false
        break
      }
    }

    if (isPrime) {
      primeNumbers++
    }
  }

  // console.log(factorial(primeNumbers) * factorial(n - primeNumbers))
  return ((factorial(primeNumbers) * factorial(n - primeNumbers)) % modulo)
}

// 932614679
// 932614679

// 440732388
// 440732388

// 411033494559523452
// 411033494559523460

// console.log(BigInt(440732388 * 932614679))
console.log(numPrimeArrangements(100))
