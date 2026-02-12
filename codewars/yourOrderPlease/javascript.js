function order(words){
  if (!words) return ''
  const sortFunc = (a, b) => {
    const numberA = a.match(/\d/g);
    const numberB = b.match(/\d/g);
    return numberA[0] - numberB[0]
  }
  return words.split(' ').sort(sortFunc).join(' ')
}

// other answers showed I could have made the logic simpler and I didn't need to 
// get the number from the match result but could compare directly
function order(words){
  if (!words) return ''
  const sortFunc = (a, b) => {
    return a.match(/\d/) - b.match(/\d/)
  }
  return words.split(' ').sort(sortFunc).join(' ')
}