var canConstruct = function (ransomNote, magazine) {
  let result = new Array(26).fill(0);
  for (let i = 0; i < ransomNote.length; ++i) {
    result[ransomNote.charCodeAt(i) - "a"]++;
  }
  for (let i = 0; i < magazine.length; ++i) {
    result[magazine.charCodeAt(i) - "a"]--;
  }
};
