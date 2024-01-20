var reverseString = function (s) {
  let l = -1,
    r = s.length;
  while (++l < --r) [s[l], s[r]] = [s[r], s[l]];
};
var reverseStr = function (s, k) {
  let res = s.split("");
  for (let i = 0; i < s.length; i += 2 * k) {
    let l = i - 1;
  }
  return s;
};
