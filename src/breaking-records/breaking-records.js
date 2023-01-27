function breakingRecords(scores) {
  let records = [0, 0]
  let [min, max] = [scores[0], scores[0]] 
  let hash = [min]
  
  for (let i = 1; i < scores.length; i++) {
    if (!hash.includes(scores[i])) {
      console.log(scores[i], hash)
      hash.push(+scores[i])
      
      if (scores[i] > max) {
        records[0] += 1
        max = scores[i]
      } else if (scores[i] < min) {
        records[1] += 1
        
        min = scores[i]
      } 
    }
  }
  
  // console.log(records)
  return records
}

// breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
// breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])