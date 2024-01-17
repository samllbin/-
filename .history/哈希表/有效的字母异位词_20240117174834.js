var isAnagram = function (s, t) {
  if ((s, length !== t.length)) {
    return false;
  }
  let base = "a".charCodeAt();
  let map = new Array(26).fill(0);
  for (const i of s) {
    map[i.charCodeAt() - base]++;
  }
  for (const i of t) {
    if (!resSet[i.charCodeAt() - base]) return false;
    resSet[i.charCodeAt() - base]--;
  }
  return true;
};
