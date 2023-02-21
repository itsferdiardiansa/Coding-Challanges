const exploreSize = (graph: Record<string, string[]>, node: string, visited: any): number => {
  if (visited.has(String(node))) return 0

  visited.add(String(node))
  
  let size = 1

  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited)
  }

  return size
}

const largestComponent = (graph: Record<string, string[]>): number => {
  const visited = new Set()
  let longest = 0

  for (let node in graph) {
    const size = exploreSize(graph, node, visited)

    if (size > longest) longest = size
  }

  return longest
}

console.log(largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
})) // => 4

console.log(largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
})) // -> 6