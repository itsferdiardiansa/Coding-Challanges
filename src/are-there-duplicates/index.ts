function areThereDuplicates(...args: number[]) {
  const collections: Record<number, number> = {}

  for (let value of args) {
    if (collections[value]) {
      return true
    } else {
      collections[value] = 1
    }
  }

  console.log(args)
  return false
}

console.log(areThereDuplicates(1, 2, 3, 1))