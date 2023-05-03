function maxSubArray(nums: number[]): number {
  let maxSum = 0, 
      leftValue = nums[0],
      leftSum = leftValue, 
      rightValue = 0

  for (let i = 0; i < nums.length; i++) {
    rightValue += nums[i]
  }

  maxSum = rightValue

  for (let i = 0; i < nums.length - 1; i++) {
    // rightValue -= nums[i]
    rightValue -= leftSum
    leftSum += nums[i]
    
    // const temp = leftValue + nums[i]
    // leftValue = temp > 0 ? temp : 0

    console.log('Loop: ', i)
    console.log('Right Value: ', rightValue)
    console.log('Left Value: ', leftValue)
    console.log('Curr Value: ', nums[i])
    console.log('Max Sum: ', leftValue)
    console.log('                         ')

    maxSum = Math.max(maxSum, leftValue, rightValue)
  }

  // while (rightIndex < nums.length) {
  //   const currValue = nums[rightIndex]
  //   tempSum += currValue
    
  //   // console.log('MAX SUM: ', maxSum)
  //   console.log('CURR NUMS: ', nums[rightIndex])
  //   console.log('TEMP SUM: ', tempSum)
    
  //   // console.log(currValue)
  //   if (tempSum < currValue) {
  //     // tempSum = Math.max(nums[++leftIndex], currValue)
  //     tempSum = nums[++leftIndex]
  //     console.log('CHANGE TEMP SUM: ', tempSum)
      
  //     // leftIndex++
  //     rightIndex = leftIndex + 1
  //   } else {
  //     rightIndex++
  //   }
    
  //   maxSum = Math.max(maxSum, tempSum, currValue)
    
  //   console.log('                     ')
  // }

  // console.log('SUM: ', sum, maxSum, 1 - -2)
  // console.log(nums)
  return maxSum
}

// const nums = [-2,1,-3,4,-1,2,1,-5,4]
// const nums = [-1,-2,-2,-2,3,2,-2,0]
// const nums = [-2,3,1,3]
// const nums = [1]
const nums = [-2,-1]
// const nums = [-2,1]
// const nums = [-1,0,-2]
// const nums = [5,4,-1,7,8]
// const nums = [0]
// const nums = [-1,-2]
// const nums = [-1,0,-2,2]
// const nums = [-1,1,-2,3]
// const nums = [1,2,-1,-2,2,1,-2,1,4,-5,4] // [2,1,-2,1,4]

console.log('Output: ', maxSubArray(nums))

// console.log(1 + 2 + -1 + -2 + 2 + 1 + -2 + 1 + 4 + -5 + 4) // 5
// console.log(1 + 2) // 3
// console.log(1 + 2 + 1) // 4
// console.log(2 + 1 + -2 + 1 + 4) // 4

// console.log(5 - -2) // 5, max = 7
// console.log(7 - 3) // 7, max = 7
// console.log(7 - 1) // 4, max = 7
// console.log(7 - 3) // 6, max = 7

// console.log(-1 + 0 + -2 + 2)

// console.log(-1 - -1) // 0, max = 0
// console.log(0 - 0) // 0, max = 0
// console.log(0 - -2) // 2, max = 2
// console.log(2 - 2) // 0, max = 2

// console.log(-2 + 1 + -3 + 4 + -1 + 2 + 1 + -5 + 4)

// // leftValue = 0
// // maxValue = 1

// // rightValue = 3, leftValue = 0
// console.log(1 - -2)

// // rightValue = 2, leftValue = 0
// console.log(3 - 1)

// // rightValue = 5, leftValue = 0
// console.log(2 - -3)

// // rightValue = 1, leftValue = 4
// console.log(5 - 4)

// // rightValue = 2, leftValue = 3
// console.log(1 - -1)

// // rightValue = 0, leftValue = 5
// console.log(2 - 2)

// // rightValue = -1, leftValue = 6
// console.log(0 - 1)

// // rightValue = 4, leftValue = -5
// console.log(-1 - -5)

// // rightValue = 0, leftValue = -1 
// console.log(4 - 4)