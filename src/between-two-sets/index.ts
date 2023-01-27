function betweenTwoSets<T extends number>(a: T[], b: T[]) {
  let count = 0
  let combineArr = [...a, ...b]

  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    count += 1

    for (let j = 0; j < combineArr.length; j++) {
      if (
        combineArr[j] < i && i % combineArr[j] !== 0 ||
        combineArr[j] > i && combineArr[j] % i !== 0
      ) {
        count--
        break
      }
    }
  }

  return count
}

// betweenTwoSets([2, 4], [16, 32, 96])
betweenTwoSets([1], [72, 48])
// betweenTwoSets([1], [100])
// betweenTwoSets([3, 9, 6], [36, 72])
// betweenTwoSets([2], [20, 30, 12])

console.log(Math.abs(-16)**2)