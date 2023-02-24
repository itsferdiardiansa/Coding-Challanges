function isPalindrome(s: string): boolean {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) return false
  }

  return true
}
function longestPalindrome(s: string): string {
  const collections: string[] = []
  const len = s.length
  let maxLen = ''

  for (let i = 0; i < len - 1; i++) {
    for (let j = maxLen.length + 1; j <= len; j++) {
      const sub = s.substring(i, j)

      console.log('SUB: ', sub, isPalindrome(sub))
      if (isPalindrome(sub) && sub.length > maxLen.length) {
        maxLen = sub
      }
    }
    console.log('               ')
  }
  
  console.log(collections, maxLen)
  return maxLen
}

longestPalindrome('babad')
// longestPalindrome('cbbd')
// console.log(isPalindrome('aba'))