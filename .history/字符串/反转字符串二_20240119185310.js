var reverseString = function (s) {
  let l = -1,
    r = s.length;
  while (++l < --r) [s[l], s[r]] = [s[r], s[l]];
};
var reverseStr = function (s, k) {
  for (let i = 0; i < s.length; i += 2 * k) {
    if (i + k <= s.length) {
      reverseString(s.slice(i, i + k));
    } else {
      reverseString(s.slice(i));
    }
  }
};
