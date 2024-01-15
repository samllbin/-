//给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，
//并返回其长度。如果不存在符合条件的子数组，返回 0。

function minSubArrayLen(target: number, nums: number[]): number {
  let i: number = 0;
  let j: number = 0;
  let resultlength: number = nums.length + 1;
  let sum: number = 0;

  while (j < nums.length) {
    sum += nums[j];
    if (sum >= target) {
      while (sum - nums[i] >= target) {
        sum -= nums[i++];
      }
      resultlength = Math.min(resultlength, j - i + 1);
    }
    j++;
  }
  return resultlength === nums.length + 1 ? 0 : resultlength;
}
