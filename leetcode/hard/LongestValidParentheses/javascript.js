/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
 
 
  let subsLength = 0;
  let arr = s.split("");
 
  for (let i = 0; i < arr.length; i++) {
    let sliced = s.slice(i);
    let l = validParans(sliced)
    if (l) {
      subsLength = l > subsLength ? l: subsLength;
    } else {
 
    }
  }
  return subsLength;
};
 
var validParans = (s) => {
 
  let stack = [];
  let brackets = {
    ')': '('
  };
 
  let topLength = 0;
  let arr = s.split("");
  let lastZerodIndex = null
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (brackets[arr[i]]) {
      if (stack.length) {
        let open = stack.pop();
        if (stack.length === 0) {
          topLength += (i - lastZerodIndex) + 1;
          highest = topLength > highest ? topLength: highest;
          lastZerodIndex = i + 1;
          lastZerodIndex = null
        }
      } else {
      	topLength = 0
      }
    } else {
      if (lastZerodIndex === null) {
        lastZerodIndex = i
      }
      stack.push(arr[i]);
    }
  }
  return highest;
}