function removeElement(nums: number[], val: number): number {
  let slowIndex: number = 0,
    fastIndex: number = 0;
  while (fastIndex < nums.length) {
    if (nums[fastIndex] !== val) {
      nums[slowIndex++] = nums[fastIndex];
    }
    fastIndex++;
  }
  return slowIndex;
}
