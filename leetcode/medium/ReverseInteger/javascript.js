var reverse = function(x) {
  let maxBitSize = Math.pow(2,31) - 1
  let p = Math.abs(x)
  let r = parseInt(p.toString().split('').reverse().join(''))
  if (r > maxBitSize) return 0
  return x > 0 ? r:-r
};

// Looked at a solution to solved? yes and no. I didn't know what was meant by or how to check for bit range.
// I got line 2 from a solution. Rest I did on my own.