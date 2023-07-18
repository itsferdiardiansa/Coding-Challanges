function collection(start: number, end: number, initial: string = '1', cached: Record<any, any> = {}) {
  if (end <= start) return start
  // if (cached[initial][end]) return cached[initial][end]

  cached[initial] = {
    ...cached[initial],
    // [end]: collection(start, end - 1, '1', cached),
    [end]: collection(start, end - 1, '2', cached),
  } 
  
  // console.log(cached)
  // cached[initial][end] = collection(start, end - 2, '2', cached)
  // cached[end] = collection(start, end - 5, cached)

  console.log('CACHED: ', cached)
  // return cached
}

function equal(nums: number[]) {
  const set = new Set()

  for (let num of nums) {
    set.add(num)
  }

  console.log(Array.from(set))
}

// const data = [2, 2, 3, 7]
const data = [10, 7, 12]

// equal(data)
console.log('Output: ', collection(7, 15))

/**
 * 
 *                                 2
 * 
 *              3                  4                  7
 * 
 *         4    5    |8|      5    6    9     |8|     9      12
 * 
 *                                
 *                                10
 * 
 *             11                 12                  15
 * 
 * 
 *                                7
 *  
 *             8                  9                   12
 * 
 *                                          13        14
 *      
 *                                              15
 * 
 * 
 *                               12
 *         
 *            13                 14                   17
 *  
 *      14    15    18      15   16    19        18   19    22
 * 
 */