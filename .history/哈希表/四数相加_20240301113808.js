/**
 * 计算四个数组中是否存在四个数，使得它们的和为0
 *
 * @param nums1 数组1
 * @param nums2 数组2
 * @param nums3 数组3
 * @param nums4 数组4
 * @returns 存在则返回4，否则返回0
 */
function fourSumCount(nums1, nums2, nums3, nums4) {
  let map = new Map();
  let count = 0;
  for (let i of nums1) {
    for (let j of nums2) {
      map.set(i + j, (map.get(i + j) || 0) + 1);
    }
  }
  for (let k of nums3) {
    for (let l of nums4) {
      if (map.has(-k - l)) {
        count += map.get(-k - l);
      }
    }
  }
  return count;
}

function fourSumCount(nums1, nums2, nums3, nums4) {
  let map = new Map();
  for (let i of nums1) {
    for (let j of nums2) {
      map.set(i + j);
    }
  }
}
