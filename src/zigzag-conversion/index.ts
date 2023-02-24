function straight(words: string[], pointers: number[], s: string, len: number, i: number) {
  words[len - pointers[0]] += s[i]
      
  pointers[0] -= 1

  if (pointers[0] < 1) {
    // Define  the key
    // Just print straight only if the len of num rows lessthan equals 2
    const key = len > 2 ? 1 : 0
    pointers[key] = key ? len - 2 : len
  }
}

function skewed(words: string[], pointers: number[], s: string, len: number, i: number) {
  words[pointers[1]] += s[i]
  pointers[1] -= 1
  
  if (pointers[1] < 1) {
    pointers[0] = len
  }
}

function convert(s: string, numRows: number): string {
  if (numRows === 1) return s

  let words: string[] = Array(numRows).fill('')
  let len = numRows
  let pointers = [len, 0]

  for (let i = 0; i < s.length; i++) {
    // Print straight
    if (pointers[0] > 0) {
      straight(words, pointers, s, len, i)
    // Print skewed
    } else if (pointers[1] >= 0) {
      skewed(words, pointers, s, len, i)
    }
  }

  return words.join('')
};

/**
 * A  C  S
 * B  D  D
 */

// convert('PAYPALISHIRING', 5)
// console.log(convert('PAYPALISHIRING', 4)) // => PINALSIGYAHRPI
console.log(convert('ABCDSD', 2)) // => ACSBDD 
// convert('PAYPALISHIRING', 3) // => PAHNAPLSIIGYIR
// console.log(convert('ABC', 1)) // => ACB
// convert('ABC', 2) // => ACB
// console.log(Math.round(5 / 2))

// console.log(Math.abs(5 - 1 - 1) % 5)

/**
 * straight: 5
 * zig: 0
 * 
 * straight: 4
 * zig: 1
 * 
 * straight: 3
 * zig: 2
 * 
 * straight: 2
 * zig: 3
 * 
 * straight: 1
 * zig: 4
 * 
 * straight: 0
 * zig: 5
 * 
 */