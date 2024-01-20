var reverseWords = function (s) {
  if (s[0] === " ") s = s.slice(1);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && s[i + 1] === " ") {
      s = s.slice(0, i) + " " + s.slice(i + 2);
    }
  }
  let res = s.split(" ").reverse().join(" ");

  return res;
};
reverseWords("Let's  take LeetCode contest");
