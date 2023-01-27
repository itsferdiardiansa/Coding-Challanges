function isSubsequence(s: string, t: string): boolean {
  let sLength = s.length
  
  for (let i = t.length - 1; i >= 0 || sLength; i--) {
    if (t[i] === s[sLength - 1]) {
      sLength--
    }
  }
  
  return !Boolean(sLength)
}

console.log(isSubsequence('gd', 'ahbgdc'))
console.log(isSubsequence('gd', 'ahbgdc'))
// isSubsequence('aec', 'ahbgdc')
