/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let indices = []
  for (let i = 0; i < nums.length; i++) {
      let possibleIndex = nums.indexOf(target - nums[i])
      if (possibleIndex !== -1 && possibleIndex !== i) {
          indices.push(i, possibleIndex)
          break
      }
  }
  return indices;
};

// Looked at answers first? No
// doesn't rank well in terms of speed/runtime. 