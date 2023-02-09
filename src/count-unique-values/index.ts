function countUniqueValue(arr: number[]): number {
  let [currentNumber] = arr
  let diff = 1
  let leftPointer = 0, rightPointer = 1
  
  while (rightPointer < arr.length) {
    if (arr[rightPointer] === currentNumber) {
      rightPointer++
    } else {
      currentNumber = arr[rightPointer++]
      
      leftPointer++
      diff++
    }
  }

  return arr.length ? diff : 1
}

const countDiff = [1, 1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 5, 10, 10, 13, 13]

console.log(countUniqueValue(countDiff))