var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  let result = new Array(26).fill(0);
  for (let i = 0; i < ransomNote.length; ++i) {
    result[ransomNote[i].charCodeAt() - "a"]++;
  }
  for (let i = 0; i < magazine.length; ++i) {
    result[magazine[i].charCodeAt() - "a"]--;
    if (result[magazine[i].charCodeAt() - "a"] < 0) return false;
  }
  return true;
};
