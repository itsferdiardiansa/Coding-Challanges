function minSubArrayLen(nums: number[], target: number) {
  let sum = 0,
      len = Number.MAX_SAFE_INTEGER,
      leftIndex = 0, 
      rightIndex = 0

  for (let num of nums) {
    sum += num
    rightIndex += 1

    if (sum >= target) break
  }

  while (leftIndex < nums.length) {
    if (sum < target && rightIndex < nums.length) {
      sum += nums[rightIndex++]
    } else if (sum >= target) {
      len = Math.min(len, rightIndex - leftIndex)
      sum -= nums[leftIndex++]
    } else {
      break
    }
  }

  console.log(len === Number.MAX_SAFE_INTEGER ? 0 : len)
}

// console.log(2 + 3 + 1 + 2) // => 8
// console.log(3 + 1 + 2) // => 6
// console.log(3 + 1 + 2 + 4) // => 10
// console.log(1 + 2 + 4) // => 7, l = 3
// console.log(1 + 2 + 4 + 3) // => 10
// console.log(4 + 3) // => 10, l = 2
// console.log(2 + 3 + 1 + 2 + 4 + 3)

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0