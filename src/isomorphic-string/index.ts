interface WordMap<T> {
  [key: string]: T
}

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const sMap: WordMap<string> = {}
  const tMap: WordMap<string> = {}

  for (let i = 0; i < s.length; i++) {
    if (
      sMap[s[i]] !== t[i] && sMap[s[i]] ||
      tMap[t[i]] !== s[i] && tMap[t[i]]
    ) {
      return false
    }

    sMap[s[i]] = t[i]
    tMap[t[i]] = s[i]
  }

  console.log(sMap, tMap)
  return true
};

isIsomorphic('add', 'egg')
console.log(isIsomorphic('baca', 'baba'), 'a.e'.includes('b'))