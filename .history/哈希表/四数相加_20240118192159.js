function fourSumCount(nums1, nums2, nums3, nums4) {
  let map = new Map();
  for (let i of nums1) {
    for (let j of nums2) {
      map.set(i + j, (map.get(i + j) || 0) + 1);
    }
  }
  for (let k of nums3) {
    for (let l of nums4) {
      if (map.has(-k - l)) {
        return map.get(-k - l);
      }
    }
  }
}
