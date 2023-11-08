// function longestCommonSubsequence(text1: string, text2: string): number {
//   let baseCollections: Record<string, number> | string = {}
//   let baseCollections2: Record<string, number> | string = {}

//   let graphs: number[][] = []
//   let longestSubsequence = 0
//   let patternY = ''
//   let patternX = ''
  
//   for (let i = 0; i < text1.length; i++) {
//     baseCollections[text1[i]] = (baseCollections[text1[i]] || 0) + 1
//   }

//   for (let i = 0; i < text2.length; i++) {
//     baseCollections2[text2[i]] = (baseCollections2[text2[i]] || 0) + 1
//   }

//   for (let i = 0; i < text1.length; i++) {
//     if (baseCollections2[text1[i]]) {
//       patternX += text1[i]
//     }
//   }

//   for (let i = 0; i < text2.length; i++) {
//     if (baseCollections[text2[i]]) {
//       patternY += text2[i]
//     }
//   }

//   for (let y = 0; y < patternY.length; y++) {
//     for (let x = 0; x < patternX.length; x++) {
//       if (patternY[y] !== patternX[x]) {
//         const yValue = graphs[y - 1] === undefined ? 0 : graphs[y - 1][x]
//         const xValue = graphs[y] === undefined ? 0 : graphs[y][x - 1]
        
//         longestSubsequence = Math.max(yValue, xValue)
        
//       } else {
//         longestSubsequence = ((graphs[y - 1] === undefined ? 0 : graphs[y - 1][x - 1]) || 0) + 1
//       }

//       if (!graphs[y]?.length)
//         graphs[y] = [longestSubsequence]
//       else
//         graphs[y].push(longestSubsequence)
//     }
//   }

//   console.log('BASE  COLLECTIONS: ', baseCollections)
//   console.log('BASE  COLLECTIONS 2: ', baseCollections2)

//   console.log('PATTERN Y: ', patternY)
//   console.log('PATTERN X: ', patternX)

//   console.log(graphs)
//   return longestSubsequence
// };


function longestCommonSubsequence(str: string, str2: string) {
  // As we write the built-ins function of Array fill then there is a 0(n) time complexity
  const graphs: number[][] = [
    Array(str.length + 1).fill(0), 
    [0]
  ] 

  for (let i = 1; i <= str2.length; i++) {
    if (!graphs[i]) graphs.push([0])

    for (let j = 1; j <= str.length; j++) {
      if (str[j - 1] === str2[i - 1]) {
        const value = graphs[i - 1][j] + 1

        console.log('A: ', str2[i - 1], str[j - 1], value, j)
        graphs[i].push(value)
      } else {
        const value = Math.max(graphs[i - 1][j], graphs[i][j - 1])
        graphs[i].push(value)
      }
    }
    // console.log('MATCH CHAR: ', graphs)
  }

  console.log('INITIAL GRAPHS: ', graphs)
}

/**
 * 
 *        a  b  c  d  e
 *     0  0  0  0  0  0
 *  
 *  a  0  1  1  1  1  1
 *  
 *  c  0  1  1  2  2  2
 *  
 *  e  0  1  1  2  2  3
 * 
 */

const text1 = 'abcde'
// const text1 = 'pmjghexybyrgzczy'
// const text1 = 'ezupkr'
// const text1 = 'abcdefghijjklmn'
// const text1 = 'oxcpqrsvwf'
// const text1 = 'mhunuzqrkzsnidwbun'
// const text2 = 'shmtulqrypy'
// const text2 = 'szulspmhwpazoxijwbq'
// const text2 = 'ubmrapg'
// const text2 = 'hafcdqbgncrcbihkd'
const text2 = 'acde'
// const text2 = 'akcemfijjmn'

// console.log('Output: ', mergeArrays(arr1, arr2))

// console.log('Output: expected (2) ', longestCommonSubsequence(text1, text2))
// console.log('Output: expected (2) ', longestCommonSubsequence(text1, text2))
// console.log('Output: expected (9) ', longestCommonSubsequence(text1, text2))
// console.log('Output: expected (4) ', longestCommonSubsequence(text1, text2))

// function subarraySum(arr: number[], n: number, s: number) {
//   let amount = 0, pointer = 0
//   let index = 0
  
//   while (index < arr.length) {
//       if (amount < s) {
//           amount += arr[index]
//           index++
//       }
      
//       if (amount > s) {
//           amount -= arr[pointer]
//           pointer++
//       } 
      
//       if (amount === s) {
//           break
//       }
//       console.log('P: ', index)
//   }
  
//   console.log((pointer + 1) + ' ' + (index))
//   return -1
// }

// function reverse(num: number) {
//   let reverseNum = 0

//   while (num > 0) {
//     reverseNum = reverseNum * 10 + num % 10 
//     num = Math.floor(num / 10)
//   }
  
//   console.log(reverseNum)
// }

// console.log(Math.floor(1234 / 10))
// reverse(12)

// subarraySum([1, 2, 3, 7, 5], 5, 12)
// subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 15)
// subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 19)