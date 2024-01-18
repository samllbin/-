function intersection(nums1, nums2) {
  if (nums1.length < nums2.length) {
    const _ = nums1;
    nums1 = nums2;
    nums2 = _;
  }
  let nums1Set = new Set(nums1);
  let resSet = new Set();

  for (let i = 0; i < nums2.length; i++) {
    nums1Set.has(nums2[i]) && resSet.add(nums2[i]);
  }
}
