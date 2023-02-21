function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const queue: number[][] = [ [sr, sc] ]
  const fillColor = image[sr][sc]
  const rowLength = image.length - 1
  const colLength = image[0].length - 1 
  
  if (color === fillColor) return image

  while (queue.length > 0) {
    const [ r, c ] = queue.shift() as number[]
    
    image[r][c] = color
    
    // Top
    if (r > 0 && image[r - 1][c] === fillColor) {
      queue.push([ r - 1, c ])
    }
    
    // Bottom
    if (r < rowLength && image[r + 1][c] === fillColor) {
      queue.push([ r + 1, c ])
    }
  
    // Left
    if (c > 0 && image[r][c - 1] === fillColor) {
      queue.push([ r, c - 1 ])
    }
    
    // Right
    if (c < colLength && image[r][c + 1] === fillColor) {
      queue.push([ r, c + 1 ])
    }
  }
  
  console.log(image)
  return image
}

const sr = 1
const sc = 1
const color = 5
const image = [
  // [1, 1, 1],
  // [1, 1, 0],
  // [1, 0, 1]
  [1, 1, 1, 0, 1],
  [1, 1, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0]
  // [0, 0, 0],
  // [0, 0, 0]
]

/**
 * 
  sr = 2
  sc = 2
  color = 5
  [
    [1, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0]
  ]

  expected:
  [
    [5, 5, 5, 0, 1],
    [5, 5, 0, 5, 0],
    [5, 5, 5, 5, 0],
    [0, 0, 0, 5, 0]
  ]
 */

floodFill(image, sr, sc, color)

function g(str: string): string {
  let i = 0
  let newStr = ''

  while (i < (str.length - 1)) {
    newStr = newStr + str[i + 1]
    i = i + 1
    console.log('IN')
  }

  return newStr
}

function f(str: string): string {
  if (str.length === 0) return ''
  else if (str.length === 1) return str
  else
    return f(g(str)) + str[0]
}

function h(n: number, str: string): string {
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2
    } else {
      n = 3*n + 1
    }

    str = f(str)
  }

  return str
}

function pow(x: number, y: number): number {
  if (y === 0) {
    return 1
  } else {
    return x * pow(x, y - 1)
  }
}

// console.log(h(1, 'fruits'))
// console.log(h(2, 'fruits'))
// console.log(h(5, 'fruits'))
// console.log(h(pow(2, 1000000000000000), 'fruits'))


