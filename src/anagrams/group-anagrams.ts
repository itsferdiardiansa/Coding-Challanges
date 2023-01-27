import data from './_test-data.json'

function hash(str: string) {
  // const collections: {[key: string]: number} = {}
  let hashMap = Array(26).fill(0)

  for (let i = 0; i < str.length; i++) {
    const keyCode = str.charCodeAt(i) - 97

    hashMap[keyCode] += 1
  }

  return hashMap.join('|')
}

function groupAnagrams(strs: string[]): string[][] {
  const collections: {[key: string]: string[]} = {}

  for (let i = 0; i < strs.length; i++) {
    const currentWord = strs[i]
    const key = hash(currentWord)

    // console.log(key)
    if (key in collections) {
      collections[key].push(strs[i])
    } else {
      collections[key] = [strs[i]]
    }
  }
  
  console.log(collections)
  return Object.values(collections)
}

// console.log(groupAnagrams(data))
console.log(groupAnagrams(["eat","tea","tan","ate","ant","eta","nat","bat"]))
console.log(groupAnagrams([
  "intolerant",
  "extraction"
]))
// console.log(groupAnagrams([
//   "saar",
//   "sara"
// ]))
// console.log(groupAnagrams([
//   'redo', 'hyde',
//   'doer', 'tape',
//   'bast', 'vane',
//   'karl', 'joel',
//   'stab'
// ]))
// console.log(groupAnagrams([
//   'abstractnesses',
//   'anthropologists',
//   'disapprovingly',
//   'unscrupulousness'
// ]))
// console.log(groupAnagrams([
//   'uncomfortably',
//   'relationships',
//   'prevaricators',
//   'nefariousness',
//   'installations'
// ]))
// console.log(groupAnagrams(["aetp","","peta","", "ba"]))
// console.log(groupAnagrams(["","","","", "ba"]))
// console.log(groupAnagrams(["","","","",""]))