// https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true

/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */
function drawingBook(n: number, p: number) {
  const isEven = p % 2 === 0
  
  if (isEven) p += 1
  /**
   * 
   * [_, 
   *  1, 
   *  2, 3, 
   *  4, 5, 
   *  6, 7, 
   *  8, 9, 
   *  10, 11, 
   *  12
   * ]
   * 
   */

  console.log('LEFT: ', Math.floor(p / 2))
  console.log('RIGHT: ', Math.round((n - p) / 2))

  return Math.min(Math.floor(p / 2), Math.round((n - p) / 2))
}

drawingBook(37455, 29835) // Output: 3810
drawingBook(95073, 17440) // Output: 8720
