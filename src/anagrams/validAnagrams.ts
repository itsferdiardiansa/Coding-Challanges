function hash(str: string) {
  // const collections: {[key: string]: number} = {}
  const hashMap = Array(26).fill(0)
  // let hash = 1

  for (let i = 0; i < str.length; i++) {
    const keyCode = str.charCodeAt(i) - 97
    
    hashMap[keyCode] = hashMap[keyCode] + 1 || 1
  }

  // console.log(hashMap.join('|'))
  return hashMap.join('|')
}

/**
 * Valid anagram with frequency pattern
 *   
 * @param str1 
 * @param str2 
 * @returns 
 */
function validAnagrams(str1: string, str2: string) {
  const letters: Record<string, number> = {}

  if (str1.length !== str2.length) return false

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i]

    letters[letter] ? letters[letter] += 1 : letters[letter] = 1
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i]
    
    if (!letters[letter]) {
      return false
    } else {
      letters[letter] -= 1
    }
  }
  
  console.log(letters)
  return true
  // return hash(str1) === hash(str2)
}

// console.log(('z'.codePointAt(0) as number) - 97)
// console.log(JSON.stringify(Array(26), null, 2))
// console.log(hash('a'))
console.log(validAnagrams('malaa', 'ljmaa'))
console.log(validAnagrams('eat', 'tea'))
// console.log(hash('lamaa'))
// console.log(hash('lamaa'))
// console.log(hash('eat') === hash('tea'))
// console.log(hash('tea'))
// console.log(hash('tan'))
// console.log(validAnagrams('makan', 'nalam'))