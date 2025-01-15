/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return s.trim().split(' ').at(-1).length
};

// beats 100%!