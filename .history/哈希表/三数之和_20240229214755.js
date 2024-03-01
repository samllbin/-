/**
 * 寻找三个数的和为0的所有组合
 *
 * @param {Array} nums 给定的数组
 * @returns {Array} 包含所有三个数的和为0的组合的数组
 * 使用双指针
 * 1. 先对数组进行排序
 * 2. 遍历数组，如果当前元素大于0，则直接返回
 * 3. 如果当前元素等于前一个元素，则跳过
 * 4. 定义左右指针，分别指向当前元素和数组的末尾
 * 5. 如果左右指针指向的元素之和大于0，则右指针--
 * 6. 如果左右指针指向的元素之和小于0，则左指针++
 * 7. 如果左右指针指向的元素之和等于0，则将当前元素、左指针指向的元素、右指针指向的元素组成
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
function threeSum1(nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  let len = nums.length;
  if (nums[0] > 0) return [];
  for (let i = 0; i < len; i++) {
    let l = i + 1;
    let r = len - 1;
    let iNums = nums[i];
    if (iNums > 0) return result;
    if ((iNums = nums[i - 1])) continue;
    while (l < r) {
      let lNums = nums[l];
      let rNums = nums[r];
      let total = iNums + lNums + rNums;

      if (total > 0) r--;
      else if (total < 0) l++;
      else {
        result.push([iNums, nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return result;
}
