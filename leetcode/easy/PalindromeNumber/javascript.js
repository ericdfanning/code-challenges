/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return x < 0 ? false : `${x}`.split('').reverse().join('') === `${x}`
};