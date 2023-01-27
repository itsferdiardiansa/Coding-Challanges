function isBadVersion(n: number): boolean {
  return n === 4
}

let solution = function(isBadVersion: Function) {
  return function(n: number) {
    let leftIndex = 1
    let rightIndex = n

    while (leftIndex < rightIndex) {
      if (isBadVersion(leftIndex)) {
        // console.log(leftIndex, rightIndex, isBadVersion(leftIndex))
        return leftIndex
      } else if (isBadVersion(rightIndex)) {
        return rightIndex + 1
      }

      leftIndex++
      rightIndex--
    }
    // console.log(n)
  }
}

const a = solution(isBadVersion)

console.log(a(100))