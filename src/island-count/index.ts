const explore = (grid: string[][], r: number, c: number, visited: any) => {
  const rowInBounds = 0 < r && r < grid.length
  const colInBounds = 0 < c && c < grid.length

  if (!rowInBounds || !colInBounds || grid[r][c] === 'W') return false

  const pos = r + ',' + c

  if (visited.has(pos)) return false
  visited.add(pos)

  explore(grid, r + 1, c, visited)
  explore(grid, r - 1, c, visited)
  explore(grid, r, c - 1, visited)
  explore(grid, r, c + 1, visited)

  return true
}

const islandCount = (grid: string[][]): number =>  {
  const visited = new Set()
  let count = 0

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited)) {
        count += 1
      }
    }
  }

  return count
}

const grid = [
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'L', 'W', 'L', 'L'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

console.log(islandCount(grid)) // -> 3