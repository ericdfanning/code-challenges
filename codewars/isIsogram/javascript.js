function isIsogram(str){
  if (str === '') return true
  const letters = {}
  for (const l of str) {
    const letter = l.toLowerCase()
    if (letters[letter]) return false
    letters[letter] = letter
  }
  return true
}
