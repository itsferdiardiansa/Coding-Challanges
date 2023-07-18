function formingMagicSquare(nums: number[][]) {
  console.log(nums)
}

const nums = [
  // Output: 7
  // [5, 3, 4], 
  // [1, 5, 8], 
  // [6, 4, 2]

  // Output: 16
  [2, 2, 7],
  [8, 6, 4],
  [1, 2, 9]

  /**
   * 2 2 7
   * 8 6 4
   * 1 2 9
   */

  // 3, 5
  

  /**
   * {
   *   1: 1,
   *   2: 1,
   *   3: 1,
   *   4: 1,
   *   5: 1,
   *   6: 1,
   *   7: 1,
   *   8: 1,
   *   9: 1
   * }
   * 
   * {
   *   1: 15,
   *   2: 18,
   *   3: 12
   * }
   * 
   * 6 2 7
   * 
   * [0,0] -> 6, (2 - 6) = 4
   * 
   * 6 2 7
   * 8 3 4
   * 
   * [1, 1] -> 3, (6 - 3) = 3
   * 
   * 6 2 7
   * 8 3 4
   * 1 5 9
   * 
   * [2, 1] -> 5, (2 - 5) = 3 
   * 
   * 6 2 7  => 15
   * 8 3 4  => 15
   * 1 5 9  => 15
   * 
   * Output: 10
   */
]

formingMagicSquare(nums)