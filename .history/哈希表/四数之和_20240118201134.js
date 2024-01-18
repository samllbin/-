var fourSum = function (nums, target) {
  let result = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let sum1 = nums[i] + nums[j];
      let left = j + 1;
      let right = len - 1;
      while (left < right) {
        let sum2 = nums[left] + nums[right];
        if (sum1 + sum2 === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
        }
      }
    }
  }
};
