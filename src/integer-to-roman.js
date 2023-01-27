/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = ''
  const symbols = {
    1000: 'M',
    500: 'D',
    100: 'C',
    50: 'L',
    10: 'X',
    5: 'V',
    1: 'I'
  }
  const numbers = Object.keys(symbols).reverse()

  while (num > 0) {
    for (let i = 0; i < numbers.length ; i++) {
      if (num >= numbers[i]) {
	const step = [100, 10].includes(+numbers[i]) ? 0 : 1
	const prevSymbol = symbols[numbers[i - 1]]
        const nextSymbol = symbols[numbers[i + step]] ?? 'I'
        const nextNumber = numbers[i + step] ?? 1
        
	if (num >= (numbers[i - 1] - nextNumber)) {
          result += nextSymbol + prevSymbol
          num -= numbers[i - 1] - nextNumber
        } else {
          result += symbols[numbers[i]]
          num -= numbers[i]
        }

        break
      }
    }
  }

  return result
};
