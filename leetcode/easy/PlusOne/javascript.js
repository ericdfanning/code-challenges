/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] !== 9) {
          digits[i] = digits[i] + 1
          for (let j = i + 1; j < digits.length; j++) {
              digits[j] = 0
          }
          break;
      } else if (i === 0) {
          digits[i] = 1
          for (let j = i + 1; j < digits.length; j++) {
              digits[j] = 0
          }
          digits.push(0)
          break;
      }
  }
 
  return digits
};