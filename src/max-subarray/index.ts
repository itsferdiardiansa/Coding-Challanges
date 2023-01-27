/**
 * 
 * Time complexity is: O(n)
 * 
 * @param arr 
 * @param target 
 * @returns 
 */
function maxSubArray(arr: number[], target: number): number {
  let maxValue = 0, tempValue = 0

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

console.log(maxSubArray([2, 3, 32, 5, 7, 12, 24], 2))