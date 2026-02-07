function digPow(n, p){
  let nums = String(n).split('')
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    total += Math.pow(Number(nums[i]), p+i)
  }

  const k = total/n
  return k >= 1 && Math.trunc(k) === k ? k : -1
}