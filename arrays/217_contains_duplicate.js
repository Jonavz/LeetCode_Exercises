/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numRep = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numRep.has(nums[i])) {
      return true;
    } else {
      numRep.add(nums[i]);
    }
  }

  return false;
};
