var reverseWords = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && s[i + 1] === " ") {
      s = s.slice(0, i) + " " + s.slice(i + 2);
    }
  }
  let res = s.split(" ").reverse().join(" ");

  let i = 0;
  while (res[i] === " ") {
    res = res.slice(1);
    i++;
  }
  let j = res.length - 1;
  while (res[j] === " ") {
    res = res.slice(0, j);
  }
  return res;
};
reverseWords("Let's  take LeetCode contest");
