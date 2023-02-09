function same<T>(arr1: T[], arr2: T[]): boolean {
  let arrCollection1: Record<number, number> = {}
  let arrCollection2: Record<number, number> = {}

  for (let num of arr1) {
    arrCollection1[num as number] = (arrCollection1[num as number] || 0) + 1
  }

  for (let num of arr2) {
    arrCollection2[num as number] = (arrCollection2[num as number] || 0) + 1
  }

  console.log(JSON.stringify(arrCollection1, null, 2))
  console.log(JSON.stringify(arrCollection2, null, 2))

  for (let key in arrCollection1) {
    if (!(<unknown>key as number ** 2 in arrCollection2)) {
      return false
    }

    if (arrCollection2[<unknown>key as number ** 2] !== arrCollection1[key]) {
      return false
    }
  }
  
  return true
}

let data1: number[] = [1, 2, 2]
let data2: number[] = [1, 9, 4]

console.log(same<number >(data1, data2))