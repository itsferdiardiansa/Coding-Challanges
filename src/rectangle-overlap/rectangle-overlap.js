/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
 const isRectangleOverlap = function(rec1, rec2) {
  const [x1, y1, x2, y2] = rec1
  const [px1, py1, px2, py2] = rec2
  let hatch = []

  const rangeA = [x1, y1].join('.')
  const rangeB = [x2, y2].join('.')
  // for (let x = x1; x < x2; x++) {
  //   // hatch[x] = []
  //   for (let y = y1; y < y2; y++) {
  //     const coordinate = +`${x}.${y}`

  //     hatch.push(coordinate)

  //     // if (
  //     //     +`${px1}.${py1}` >= coordinate ||
  //     //     +`${px2}.${py2}` <= coordinate
  //     //   ) {
  //     //   return true
  //     // }

  //   }
  // }

  console.log(rangeA, rangeB)
  // console.log(hatch, px1, py1)
  // console.log('====================')
  // console.log(hatch2)
  return false
};

// [-687153884,-854669644,-368882013,-788694078]
// [540420176,-909203694,655002739,-577226067]
// console.log(isRectangleOverlap([-148,-790,822,-718], [-560,89,504,612]))
// console.log(isRectangleOverlap([5, 2, 8, 18], [1,0,2,1]))
// console.log(isRectangleOverlap([5,15,8,18], [0,3,7,9])) // false
// console.log(isRectangleOverlap([0,0,1,4], [1,2,2,5])) // false
console.log(isRectangleOverlap([0,0,3,3], [0,1,2,2])) // true
// console.log(isRectangleOverlap([4,4,14,7], [4,3,8,8])) // true
// console.log(isRectangleOverlap([0,0,1,1], [2,2,3,3]))
// console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]))
// console.log(isRectangleOverlap([2, 17, 6, 20], [3, 8, 6, 20])) // true
// console.log(isRectangleOverlap([2, 17, 6, 20], [1,0,2,1]))

// console.log(88 - 43)
// console.log(620 - 38)
// console.log(33 - 11)

// Jika x1 lebih kecil dari dari x2 dan y2