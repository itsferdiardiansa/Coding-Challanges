function findLongestSubstring(str: string): number {
  let start = 0, longest = 0
  let charsMap: Record<string, number> = {}

  for (let i = 0; i < str.length; i++) {
    console.log('CHAR: ', str[i], i)
    console.log('CHARS MAP: ', charsMap)
    console.log('STARTS: ', start)
    console.log('LONGEST: ', longest)


    if (charsMap[str[i]]) {
      start = Math.max(start, charsMap[str[i]])
    }

    longest = Math.max(longest, i - start + 1)

    charsMap[str[i]] = i + 1

    console.log('                     ')
  }

  return longest
}

findLongestSubstring('thisisawesome')
// findLongestSubstring('abcabcbb')
// findLongestSubstring('pwwkew')

/**
 * t h i s i s a w e s o m e
 * 
 * {
 *    t: 1,
 *    h: 2,
 *    i: 3,
 *    s: 4,
 *    i: 5
 * }
 */