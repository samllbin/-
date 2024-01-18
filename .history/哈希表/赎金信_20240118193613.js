var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  let result = new Array(26).fill(0);
  for (let i = 0; i < magazine.length; ++i) {
    result[magazine[i].charCodeAt() - "a".charCodeAt()]++;
  }

  for (let i = 0; i < ransomNote.length; ++i) {
    if (!result[ransomNote[i].charCodeAt() - "a"]) return false;
    result[ransomNote[i].charCodeAt() - "a".charCodeAt()]--;
  }

  return true;
};
