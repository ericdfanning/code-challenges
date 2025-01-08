/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      let possibleIndex = nums.indexOf(target - nums[i])
      if (possibleIndex !== -1 && possibleIndex !== i) {
          return [i, possibleIndex]
      }
  }
  return []
};

// Looked at answers first? No
// doesn't rank well in terms of speed/runtime. I would need to prevent duplicate loops or checks.
// indexOf could be slower than a nested loop if it's a large data set. 
// use i to help set j in order to avoid checking numbers already evaluated in the inverse