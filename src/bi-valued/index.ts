function biValued(arr: number[]) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    // const currentValue = 
    let temp: number[] = [arr[i], arr[i + 1]]
    // let diffCount = 2

    for (let j = i + 2; j < arr.length; j++) {
      // console.log(temp, i, arr[j])
      if (
        arr[j] === temp[0] ||
        arr[j] === temp[1]
        ) {
          temp.push(arr[j])
      }
    }
  }

  // console.log(result)
}

// (0, 3), (1, 2), (1, 3), (4, 5)
biValued([5, 4, 4, 5, 0, 12])
// biValued([5, 4, 4, 0])

// (0, 1), (1, 3), (2, 3)
// biValued([1, 2, 3, 2])

/**
 * {
 *    5: [5],
 *    4: [4, 4]
 * 
 *    4: [4],
 *    5: [5]
 * 
 *    
 * }
 * 
 */
