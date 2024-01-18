var threeSum = function (nums) {
  let result = [],
    len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    let iNums = nums[i];
    let l = i + 1;
    let r = len - 1;
    for (let j = i + 1; i < len; j++) {
      let lNums = nums[j];
      let rNums = nums[len - 1];
    }
  }
};
