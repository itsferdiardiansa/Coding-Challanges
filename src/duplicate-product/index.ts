function findDuplicate(name: string[], price: number[], weight: number[]): number {
  const collections: Record<string, number> = {}
  let duplicate = 0

  for (let key in name) {
    const keyname = [ name[key], price[key], weight[key] ].join(':')
    
    collections[keyname] = (collections[keyname] || 0) + 1

    if (collections[keyname] > 1) duplicate += collections[keyname]
  }

  console.log('COL: ', collections)
  console.log('DUPL: ', duplicate)
  return duplicate
}

findDuplicate(['Bag', 'Shoes', 'Hat', 'Bag', 'Bag', 'Hat', 'Bag'], [1, 4, 2, 1, 5, 2, 1], [1, 2, 6, 1, 1, 6, 1])