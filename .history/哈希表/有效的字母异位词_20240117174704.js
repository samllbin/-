var isAnagram = function (s, t) {
  if ((s, length !== t.length)) {
    return false;
  }
  let base = "a".charCodeAt();
  let map = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; ++i) {
    map[s[i].charCodeAt() - base]++;
  }
};
