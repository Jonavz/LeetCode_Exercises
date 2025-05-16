/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let total = nums[0];
  let numActual = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > numActual + nums[i]) {
      numActual = nums[i];
    } else {
      numActual = numActual + nums[i];
    }

    if (numActual > total) {
      total = numActual;
    }
  }

  return total;
};
