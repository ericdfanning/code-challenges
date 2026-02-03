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

// this is a clever solution by someone else in the community. 
// By making it toUpperCase, a new set takes a strings individual letters and makes it a new node
// which cuts out duplicates because it's a set
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}