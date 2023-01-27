function searchInsertPosition(arr: number[], target: number): number {
  let leftIndex = 0, rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    const mid = Math.floor((leftIndex + rightIndex) / 2)
    const currentArr = arr[mid]

    console.log('A: ', currentArr, currentArr < 3, currentArr > 3)
    if (currentArr < target) {
      leftIndex = mid + 1
    } else if (currentArr > target) {
      rightIndex = mid - 1
    } else {
      return mid
    }
  }

  return leftIndex
}

// console.log(searchInsertPosition([1, 2, 3, 5, 6, 8, 9], 5))
// console.log(searchInsertPosition([1, 3, 5, 6], 5))
console.log(searchInsertPosition([1, 3, 5], 3))