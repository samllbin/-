//给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
function sortedSquares(nums: number[]): number[] {
  const ans: number[] = [];
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > nums[right]) {
      ans.unshift(nums[left] ** 2);
      left++;
    } else {
      ans.unshift(nums[right] ** 2);
      right--;
    }
  }

  return ans;
}
