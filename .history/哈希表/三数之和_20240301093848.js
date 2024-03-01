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
  let result = [];
  nums.sort((a, b) => a - b);
  if (nums[0] > 0) return [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let l = i + 1;
    let r = len - 1;
    let iNum = nums[i];
    if (iNum > 0) return result;
    if (iNum === nums[i - 1]) continue;
    while (l < r) {
      let lNum = nums[l];
      let rNums = nums[r];
      let total = iNum + lNum + rNums;

      if (total > 0) r--;
      else if (total < 0) l++;
      else {
        result.push([iNum, lNum, rNums]);
        while (l < r && lNum === nums[l + 1]) l++;
        while (l < r && rNums === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return result;
}

function threeSum1(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  if (nums[0] > 0) return [];
  let len = nums.length;
}
