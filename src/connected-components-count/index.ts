const explore = (graph: Record<string, number[]>, current: string | number, visited: any): boolean => {
  if (visited.has(String(current))) return false

  visited.add(String(current))

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited)
  }

  return true
}

const connectedComponentsCount = (graph: Record<string, number[]>): number => {
  const visited = new Set()
  let count = 0

  for (let node in graph) {
    if (explore(graph, node, visited)) {
      count += 1
    }
  }

  return count
}

console.log(connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
  5: [0, 8],
  8: [0, 5],
}))