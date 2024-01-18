var fourSum = function (nums, target) {
  let result = [];
  let len = nums.length;
  if (len < 4) return result;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < len; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let sum1 = nums[i] + nums[j];
      let left = j + 1;
      let right = len - 1;
      while (left < right) {
        let sum2 = nums[left] + nums[right];
        let taotal = sum1 + sum2;
        if (taotal > target) right--;
        else if (taotal < target) left++;
        else {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[right] === nums[right - 1]) right--;
          while (left < right && nums[left] === nums[left + 1]) left++;
          left++;
          right--;
        }
      }
    }
  }
};
