/**
 * 
 * Time complexity is: O(n)
 * 
 * @param arr 
 * @param target 
 * @returns 
 */
function maxSubArray(arr: number[], target: number): number | null {
  let maxValue = 0, tempValue = 0

  if (arr.length < target) return null

  for (let i = 0; i < target; i++) {
    maxValue += arr[i]
  }

  tempValue = maxValue
  for (let i = target; i < arr.length; i++) {
    tempValue = tempValue - arr[i - target] + arr[i]
    maxValue = Math.max(maxValue, tempValue)
  }

  return maxValue
}

// console.log(maxSubArray([2, 3, 32, 5, 7, 12, 24], 2))
console.log(maxSubArray([100, 200, 300, 400], 2))
console.log(maxSubArray([2, 3], 3))

// 1000 - 100 + 300 = 1200