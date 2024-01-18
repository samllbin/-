var fourSum = function (nums, target) {
  let result = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
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
        }
      }
    }
  }
};
