var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  let result = new Array(26).fill(0);
  for (let i = 0; i < ransomNote.length; ++i) {
    result[ransomNote.charCodeAt(i) - "a"]++;
  }
  for (let i = 0; i < magazine.length; ++i) {
    result[magazine.charCodeAt(i) - "a"]--;
    if (result[magazine.charCodeAt(i) - "a"] < 0) return false;
  }
};
