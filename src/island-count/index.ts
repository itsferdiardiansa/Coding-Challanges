const explore = (grid: string[][], r: number, c: number, visited: any, position: any[] = []) => {
  if (grid[r][c] === 'W') return false

  const pos = r + ',' + c

  if (visited.has(pos)) return false
  visited.add(pos)
  position.push(pos)
  
  if (r < grid.length - 1) {
    explore(grid, r + 1, c, visited, position)

    if (c > 0) explore(grid, r + 1, c - 1, visited, position)

    if (c < grid[0].length - 1) explore(grid, r + 1, c + 1, visited, position)
  }

  if (r > 0) {
    explore(grid, r - 1, c, visited, position)
    
    if (c > 0) explore(grid, r - 1, c - 1, visited, position)

    if (c < grid[0].length - 1) explore(grid, r - 1, c + 1, visited, position)
  }
  
  if (c > 0) explore(grid, r, c - 1, visited, position)

  if (c < grid[0].length - 1) explore(grid, r, c + 1, visited, position)

  return true
}

const islandCount = (grid: string[][]): number =>  {
  const visited = new Set()
  let count = 0
  let pos: any = []

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      pos.push([])
      
      if (explore(grid, r, c, visited, pos[pos.length - 1])) {
        count += 1
      } else 
      pos.pop()
    }
  }
  
  console.log('G: ', visited, pos)
  return count
}

const grid = [
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'L', 'L', 'L', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'W', 'W'],
  ['W', 'W', 'L', 'W', 'W'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
];

function findWays(n: number, s: string, cached: Record<string, number> = {}): number {
  if (n in cached) return cached[n]
  
  if (n === 0)
    return 1
  else if (n < 1 || s[n] !== '.' && n > 0)
    return 0
  else 
    cached[n] = findWays(n - 1, s, cached) + findWays(n - 2, s, cached) + findWays(n - 3, s, cached)
  
  return cached[n]
}

// console.log('FIND WAYS: ', findWays(3, 'o_..'))
// console.log('FIND WAYS: ', findWays(20, 'o_._._._._._._._._._.'))
console.log('FIND WAYS: ', findWays(49, 'o...............__..__.__.__........................'))
// console.log(islandCount(grid)) // -> 3
// console.log(0 < 0 && 0 < 5)