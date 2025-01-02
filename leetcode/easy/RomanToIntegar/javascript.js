/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  const split = s.split('')
  let total = 0
  for (let i = 0; i < split.length; i++) {
      let first = roman[split[i]];
      let second = roman[split[i + 1]];
      if (second > first) {
          total += second - first
          i++
      } else {
          total += first
      }
  }
  return total
};

// Looked at the answer to solve? No

// After looking at some other solutions, I cleaned up a bit and used subtraction instead.

var romanToInt = function(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const split = s.split('')
  let total = 0
  for (let i = 0; i < split.length; i++) {
      let cur = roman[split[i]];
      let next = roman[split[i + 1]];

      total += next > cur ? -cur: cur
  }
  return total
};