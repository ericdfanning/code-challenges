/**
* @param {string} s
* @param {number} numRows
* @return {string}
*/

var convert = function(s, numRows) {
  const result = []
  const zzr = numRows - 2
  const split = s.split('')
  for (let i = 0; i < numRows; i++) {
      result.push([])
  }

  while(split.length) {
    for(let i = 0; i < numRows; i++) {
      if (split.length === 0) break
      let letter = split.shift()
      if (result[i]) {
          result[i].push(letter)
      } else {
          result[i] = [letter]
      }
    }

    for(let j = zzr; j > 0; j--) {
      if (split.length === 0) break
      let letter = split.shift()
      if (result[j]) {
          result[j].push(letter)
      }
    }
  }

  let r = ''
  for(let i of result){
      r += i.join('')
  }
  return r
};