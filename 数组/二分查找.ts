function search(nums: number[], target: number): number {
  let mid: number,
    left: number = 0,
    right: number = nums.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}
