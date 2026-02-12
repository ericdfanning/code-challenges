function order(words){
  if (!words) return ''
  const sortFunc = (a, b) => {
    const numberA = a.match(/\d/g);
    const numberB = b.match(/\d/g);
    return numberA[0] - numberB[0]
  }
  return words.split(' ').sort(sortFunc).join(' ')
}