function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//or without regex to challenge myself


function disemvowel(str) {
  const cleanedStr = str
  const vowels = { a: 'a', e: 'e', i: 'i', o: 'o', u: 'u' }

  for (const letter of cleanedStr) {
    if (vowels[letter]) {
      cleanedStr = cleanedStr.replace(letter, '')
    }
  }
  return str.replace(/[aeiou]/gi, '');
}