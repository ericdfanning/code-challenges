/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  return `${x}`.split('').reverse().join('') === `${x}`
};

// Looked at solution to solve? No
// could make that a one liner too
