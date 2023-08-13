function longestCommonSubsequence(text1: string, text2: string): number {
  let baseCollections: Record<string, number> | string = {}
  let baseCollections2: Record<string, number> | string = {}

  let graphs: number[][] = []
  let longestSubsequence = 0
  let patternY = ''
  let patternX = ''
  
  for (let i = 0; i < text1.length; i++) {
    baseCollections[text1[i]] = (baseCollections[text1[i]] || 0) + 1
  }

  for (let i = 0; i < text2.length; i++) {
    baseCollections2[text2[i]] = (baseCollections2[text2[i]] || 0) + 1
  }

  for (let i = 0; i < text1.length; i++) {
    if (baseCollections2[text1[i]]) {
      patternX += text1[i]
    }
  }

  for (let i = 0; i < text2.length; i++) {
    if (baseCollections[text2[i]]) {
      patternY += text2[i]
    }
  }

  for (let y = 0; y < patternY.length; y++) {
    for (let x = 0; x < patternX.length; x++) {
      if (patternY[y] !== patternX[x]) {
        const yValue = graphs[y - 1] === undefined ? 0 : graphs[y - 1][x]
        const xValue = graphs[y] === undefined ? 0 : graphs[y][x - 1]
        
        longestSubsequence = Math.max(yValue, xValue)
        
      } else {
        longestSubsequence = ((graphs[y - 1] === undefined ? 0 : graphs[y - 1][x - 1]) || 0) + 1
      }

      if (!graphs[y]?.length)
        graphs[y] = [longestSubsequence]
      else
        graphs[y].push(longestSubsequence)
    }
  }

  console.log('BASE  COLLECTIONS: ', baseCollections)
  console.log('BASE  COLLECTIONS 2: ', baseCollections2)

  console.log('PATTERN Y: ', patternY)
  console.log('PATTERN X: ', patternX)

  console.log(graphs)
  return longestSubsequence
};

const arr1 = [4, 8, 13, 17]
const arr2 = [3, 11, 12, 16, 2]

// const text1 = 'abcde'
const text1 = 'pmjghexybyrgzczy'
// const text1 = 'ezupkr'
// const text1 = 'abcdefghijjklmn'
// const text1 = 'oxcpqrsvwf'
// const text1 = 'mhunuzqrkzsnidwbun'
// const text2 = 'shmtulqrypy'
// const text2 = 'szulspmhwpazoxijwbq'
// const text2 = 'ubmrapg'
const text2 = 'hafcdqbgncrcbihkd'
// const text2 = 'ace'
// const text2 = 'akcemfijjmn'

// console.log('Output: ', mergeArrays(arr1, arr2))

// console.log('Output: expected (2) ', longestCommonSubsequence(text1, text2))
// console.log('Output: expected (2) ', longestCommonSubsequence(text1, text2))
// console.log('Output: expected (9) ', longestCommonSubsequence(text1, text2))
console.log('Output: expected (4) ', longestCommonSubsequence(text1, text2))

/** 
 * 
 *          e   z   u   p   k   r
 *          0   0   0   0   0   0
 *  u   0   0   0   1   1   1   1
 *  
 *  b   0   0   0   1   1   1   1
 *  
 *  m   0   0   0   1   1   1   1
 *  
 *  r   0   0   0   1   1   1   2
 *  
 *  p   0   0   0   1   2   2   2
 *  
 *  r   0   0   0   1   2   2   3
 * 
 * 
 *  upr
 */