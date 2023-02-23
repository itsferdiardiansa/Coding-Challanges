function numberOfPairs(nums: number[]): number[] {
  let result = [0, 0]
  let collections: Record<string, number> = {}

  for (let i = 0; i < nums.length; i++) {
    collections[nums[i]] = (collections[nums[i]] || 0) + 1
  }

  for (let n in collections) {
    if (collections[n] > 1) {
      result[0] += Math.floor(collections[n] / 2)
      result[1] += collections[n] % 2 
    } else {
      result[1] += 1
    }
  }
  return result
}

// numberOfPairs([1,3,2,1,3,2,2]) // => [3, 1]
// numberOfPairs([1,1]) // => [1, 0]
// numberOfPairs([0,0,1,1,2,2]) // => [3, 0]
numberOfPairs([1,0,0]) // => [1, 1]
// numberOfPairs([5,12,53,22,7,59,41,54,71,24,91,74,62,47,20,14,73,11,82,2,15,38,38,20,57,70,86,93,38,75,94,19,36,40,28,6,35,86,38,94,4,90,18,87,24,22]) // => [7,32]
// numberOfPairs([89,5,7,36,5,85,83,77,56,44,90,27,56,100,67,27,61,18,29,15,44,11,81,83,38,58,14,46,23,70,63,76,75,69,21,88,7,3,28,2,28,89,32,43,9,93,21,63,76,45,13,94,16,85,16,52,46,7,60,50,69,4,82,81,57,11,14,38,78,27,45,3,12,14,95,71,72,40,27,82,66,99,7,23,84,66,7,3,56,38,43,37,4,90,85,80,54,42,67,2]) // => [31,38]