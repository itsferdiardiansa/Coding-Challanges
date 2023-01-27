function formatPhone(str: string) {
  const result: string[] = []
  let temp: string = ''

  for (let i = 0; i < str.length; i++) {
    if (temp.length === 3) {
      result.push(temp)
      temp = ''
    }

    if (str[i].match(/[0-9]/)) {
      temp += str[i]
    }
  }

  if (temp.length === 1) {
    const lastString = result[result.length - 1]
    temp = lastString[lastString.length - 1] + temp

    result[result.length - 1] = lastString.substring(0, 2)
  }
  
  result.push(temp)
  
  console.log(result, result.join('-'))
  
  return result.join('-')
}

// formatPhone('0xvb8 131... 48 8 8 ll5 0..9xxxx xxxc 3mk')