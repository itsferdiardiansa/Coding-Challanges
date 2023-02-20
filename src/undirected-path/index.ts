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

function hasPath(graph: Record<string, string[]>, src: string, dst: string, visited: any): boolean {
  if (visited.has(src)) return false
  if (src === dst) return true

  visited.add(src)

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) return true
  }

  return false
} 

function undirectedPath(edges: string[][], nodeA: string, nodeB: string) {
  const graph = buildGraph(edges)

  return hasPath(graph, nodeA, nodeB, new Set())
}

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
]

console.log(undirectedPath(edges, 'j', 'm'))
