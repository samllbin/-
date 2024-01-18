/**
 * 寻找三个数的和为0的所有组合
 *
 * @param {Array} nums 给定的数组
 * @returns {Array} 包含所有三个数的和为0的组合的数组
 */
function threeSum(nums) {
  let result = [],
    len = nums.length;
  nums.sort((a, b) => a - b);
  if (nums[0] > 0) return [];
  for (let i = 0; i < len; i++) {
    let iNums = nums[i];
    let l = i + 1;
    let r = len - 1;
    if (iNums > 0) return result;
    if (iNums === nums[i - 1]) continue;
    while (l < r) {
      let lNums = nums[l];
      let rNums = nums[r];
      let totalSum = iNums + lNums + rNums;

      if (totalSum > 0) r--;
      else if (totalSum < 0) l++;
      else {
        result.push([iNums, lNums, rNums]);
        while (l < r && nums[l + 1] === lNums) l++;
        while (l < r && nums[r - 1] === rNums) r--;
        l++;
        r--;
      }
    }
  }
  return result;
}
