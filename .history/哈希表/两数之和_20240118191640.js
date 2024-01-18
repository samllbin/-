/**
 * 两数之和
 *
 * @param {Array} nums 数组
 * @param {Number} target 目标值
 * @returns {Array} 返回一个包含两个元素的数组，第一个元素为较小的索引，第二个元素为较大的索引
 */
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(nums[i], i);
    }
  }
}
