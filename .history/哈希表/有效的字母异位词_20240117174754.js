var isAnagram = function (s, t) {
  if ((s, length !== t.length)) {
    return false;
  }
  let base = "a".charCodeAt();
  let map = new Array(26).fill(0);
  for (const i of s) {
    map[i.charCodeAt() - base]++;
  }
};
