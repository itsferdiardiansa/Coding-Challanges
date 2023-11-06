type VisitedType = {
  [x: number]: boolean
}

function explore(distance: number, visited: VisitedType, currentCity: number, cities: number[]) {
  // currentCity += distance
  
  if (cities[currentCity] === 0) {
    visited[currentCity] = true

    return
  }

  if (currentCity === cities.length - 1) return

  explore(cities[currentCity] - 1, visited, (currentCity + distance), cities)
}

/**
 * 
 *              0 (2)
 *    
 *          2 (2)    1 (3)
 *  
 *   |4 (4)|      3 (1)
 * 
 */

function canJump(nums: number[]): boolean {
  const graphs: Record<number, number[]> = {}
  const length = nums.length - 1
  const directions: number[] = [0]
  const visited: VisitedType = { 0: true }

  // while (
  //   directions.length > 0
  // ) {
    const currentCity = directions.shift() || 0

    const max = Math.min(length - currentCity, nums[currentCity])
    
    explore(max, visited, currentCity, nums)
    // if (nums[i] === 0) return false 
    
    // for (let j = max; j > 0; j--) {
    //   const key = j + currentCity
  
    //   if (graphs[key]) {
    //     graphs[key].push(currentCity)
    //   } else {
    //     graphs[key] = [currentCity]
    //   }
      
    //   directions.push(key)

    //   console.log('CURRENT CITY: ', currentCity) 
    //   console.log('DIRECTIONS: ', directions)
    //   if (key === length) return true
    //   // console.log('INDEX: ', i)
    //   // console.log('INDEX J: ', j)
    //   // console.log('MAX: ', nums[i])
    //   // console.log('LENGTH: ', nums.length - i - 1)
    //   // console.log('CHOOSEN MAX: ', Math.min(nums.length - i - 1, nums[i]))
    //   console.log('                   ')
    // }
  // }

  console.log('GRAPHS: ', graphs)
  return false
}

// LOOP 1
// [1, 2]

// LOOP 2
// [2, 3, 4]
// ARRIVED

// LOOP 1

const data = [2,3,1,1,4] // true
// const data = [3,2,1,0,4] // false
// const data = [0,2,3] // false
// const data = [1,0,1,0] // false
// const data = [3,0,8,2,0,0,1] // true

console.log('Output: ', canJump(data))
const v = [1, 2, 3]

// console.log(5 - 2)
// console.log(Math.min(3, 10))