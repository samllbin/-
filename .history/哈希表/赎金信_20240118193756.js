function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  let base = "a".charCodeAt();
  let result = new Array(26).fill(0);
  for (let i = 0; i < magazine.length; ++i) {
    result[magazine[i].charCodeAt() - base]++;
  }

  for (let i = 0; i < ransomNote.length; ++i) {
    if (!result[ransomNote[i].charCodeAt() - base]) return false;
    result[ransomNote[i].charCodeAt() - base]--;
  }

  return true;
}
