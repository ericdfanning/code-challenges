/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map()
  const split = s.split('')
  let longestLength = 0;
  let subStringLength = 0;
  if (split.length === 1) return 1
  for (let i = 0; i < split.length; i++) {
      if (map.has(split[i])) {
          if (subStringLength > longestLength) {
              longestLength = subStringLength
          }
          i -= subStringLength
          subStringLength = 0
          map.clear()
          continue
      }
      map.set(split[i], i)
      subStringLength += 1
      if (i === split.length - 1 && subStringLength > longestLength) {
          longestLength = subStringLength
      }
  }
  return longestLength
};