import * as fs from 'fs'
import { resolve } from 'path'

function happyNumbers(a: number, b: number, k: number): number {
  let result = 0

  for (let i = a; i <= b; i++) {
    if (i % k === 0) result += 1
  }

  return result
}

const file = resolve(process.cwd(), 'src/happy-number', 'test-cases.txt')
const data = fs.readFileSync(file, { encoding:'utf8', flag:'r' })
console.log(data)