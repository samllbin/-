var reverseWords = function (s) {
  let res = s.split(" ").reverse().join(" ");
  for (let i = 0; i < res.length; i++) {
    if (res[i] === " " && res[i + 1] === " ") {
      res = res.slice(0, i) + " " + res.slice(i + 2);
    }
  }
  return res;
};
reverseWords("Let's  take LeetCode contest");
