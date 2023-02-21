function buildGraph(edges: string[][]): Record<string, string[]> {
  const graph: Record<string, string[]> = {}

  for (let edge of edges) {
    const [ a, b ] = edge
    
    if (!(a in graph)) graph[a!] = []
    if (!(b in graph)) graph[b!] = []

    graph[a].push(b)
    graph[b].push(a)
  }

  return graph
}

function shortestPath(edges: string[][], nodeA: string, nodeB: string) {
  const graph = buildGraph(edges)
  const queue = [ [nodeA, 0] ]
  const visited = new Set([ nodeA ])

  while (queue.length > 0) {
    const [ node, distance ] = queue.shift() as any[]
    
    if (node === nodeB) return distance
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor)
        queue.push([ neighbor, distance + 1 ])
      }
    }
  }

  return -1
}

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]

console.log(shortestPath(edges, 'w', 'y')) // -> 2