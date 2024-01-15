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
