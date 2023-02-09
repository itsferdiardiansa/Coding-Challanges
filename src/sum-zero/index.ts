function sumZero(arr: number[]): number[] {
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex < rightIndex) {
    let sum = arr[leftIndex] + arr[rightIndex]

    if (sum === 0) {
      return [arr[leftIndex], arr[rightIndex]]
    } else if (sum > 0) {
      leftIndex++
    } else {
      rightIndex--
    }
  }

  return [-1, -1]
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))