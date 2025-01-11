/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };
 
  if (s === "") {
      return true;
  }
 
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (brackets[arr[i]]) {
      let open = stack.pop();
      if (open !== brackets[arr[i]]) {
        return false;
      }
    } else {
      stack.push(arr[i]);
    }
  }
  return stack.length === 0;
};