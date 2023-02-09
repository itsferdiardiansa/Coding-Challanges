function sameFrequency(num1: number, num2: number) {
  let strNum1 = num1.toString()
  let strNum2 = num2.toString()
  const collections: Record<string, number> = {}

  for (let value of strNum1) {
    collections[value] = (collections[value] || 0) + 1  
  }

  for (let value of strNum2) {
    if (!collections[value]) return false
    else
      collections[value] -= 1
  }

  console.log(collections)
  return true
}

sameFrequency(128, 282)