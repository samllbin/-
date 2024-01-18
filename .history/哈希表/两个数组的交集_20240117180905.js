function intersection(nums1, nums2) {
  if (nums1.length < nums2.length) {
    const _ = nums1;
    nums1 = nums2;
    nums2 = _;
  }
}
