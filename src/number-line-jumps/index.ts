/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  for (let i = 0; i < 10000 && x1 <= x2; i++) {
    x1 += v1
    x2 += v2
    
    console.log('I: ', i, x1, x2)
    if (x1 === x2) {
      return 'YES'
    }
  }
  
  return 'NO'
}

kangaroo(14, 4, 98, 2)
console.log(98 % 14)
console.log(5 % 0)
console.log(98 % 26)
console.log(Math.floor(94 / 42), 42 * 2)
console.log(Math.floor(5 / 0), 42 * 2)