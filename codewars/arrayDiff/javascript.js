function arrayDiff(a, b) {
  return a.filter( item => !b.includes(item))
} // a lot easier than expected. Could do this the long way of nested for loops too.