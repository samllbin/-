var reverseStr = function (s, k) {
  let res = s.split("");
  for (let i = 0; i < s.length; i += 2 * k) {
    let l = i - 1,
      r = i + k > s.length ? s.length : i + k;
    while (++l < --r) [res[l], res[r]] = [res[r], res[l]];
  }
  return res.join("");
};
