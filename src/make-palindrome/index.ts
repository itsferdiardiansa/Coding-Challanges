function makePalindrome(chars: string): string {
  let firstArr = [], secondArr = [], midArr = [],
      collections: Record<string, number> = {}

  for (let char of chars) {
    collections[char] = (collections[char] || 0) + 1
  }

  console.log(str, collections)
  
  for (let charIndex in collections) {
    if (collections[charIndex] > 1) {
      for (let i = 0; i < Math.floor(collections[charIndex] / 2); i++) {
        firstArr.push(charIndex)
        secondArr.unshift(charIndex)
      }
    }

    if (collections[charIndex] % 2 !== 0 && collections[charIndex] >= 1) {
      midArr.push(charIndex)
    }
    // } 
    // 'm'       'm'
    // 'ma'
    // 'md'     'dm'
  }

  if (midArr.length > 1) return 'No Plaindrome!'
  
  console.log(firstArr, secondArr, midArr, chars.length)
  
  return [...firstArr, ...midArr, ...secondArr].join('')
}

const str = 'amwamwaaskk'
// const str = 'geeksforgeeks'
// const str = 'abb'
console.log(makePalindrome(str))

console.log(2 % 3)