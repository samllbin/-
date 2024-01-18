var threeSum = function (nums) {
  let result = [],
    len = nums.length;
  nums.sort((a, b) => a - b);
  if (nums[0] > 0) return [];
  for (let i = 0; i < len; i++) {
    let iNums = nums[i];
    let l = i + 1;
    let r = len - 1;
    if (iNum > 0) return res;
    for (let j = i + 1; i < len; j++) {
      let lNums = nums[l];
      let rNums = nums[r];
      let totalSum = iNums + lNums + rNums;

      if (totalSum > 0) r--;
      else if (totalSum < 0) l++;
      else {
        result.push([iNums, lNums, rNums]);
        while (l < r && nums[l] === lNums) l++;
        while (l < r && nums[r] === rNums) r--;
        l++;
        r--;
      }
    }
  }
};
