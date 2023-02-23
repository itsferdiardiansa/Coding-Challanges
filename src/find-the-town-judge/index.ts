function buildGraph(edges: number[][]) {
  const graph: Record<string, number[]> = {}

  for (let edge of edges) {
    const [ a, b ] = edge

    if (!(a in graph)) graph[a] = []
    // if (!(b in graph)) graph[b] = []

    graph[a].push(b)
    // graph[b].push(a)
  }

  return graph
}

function findJudge(n: number, trust: number[][]): number {
  if (n === 1) return n

  const residents: number[][] = []

  for (let i = 0; i < n + 1; i++) {
    residents.push([0, 0])
  }

  for (let item of trust) {
    if (item.length) {
      residents[item[0]][0] += 1
      residents[item[1]][1] += 1
    }
  }
  
  for (let i in residents) {
    if (residents[i][1] ===(n - 1) && residents[i][0] === 0) {
      return i as unknown as number
    }
  }

  return -1
}

const n = 1
// const trust = [[1,3],[2,3],[3,1]] // => -1
// const trust = [[1,3],[1,4],[2,3],[2,4],[4,3]] // => 3
// const trust = [[1,3],[1,4],[2,3]] // => -1
// const trust = [[1,3],[1,4],[2,3],[2,4],[3,4]] // => 4
const trust = [[]] // => 4

console.log(findJudge(n, trust))