/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let array = [];
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    n = fn(arr[i], i);
    array[i] = n;
  }
  return array;
};
