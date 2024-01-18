var threeSum = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let base = nums[i];
    let map = new Map();
    for (let j = i + 1; j < nums.length; j++) {
      let target = base + nums[j];
      if (map.has(0 - target)) {
        result.push([0 - target, base, nums[j]]);
      } else {
        map.set(target, j);
      }
    }
  }
};
