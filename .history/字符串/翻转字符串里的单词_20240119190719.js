var reverseWords = function (s) {
  let res = s.split(" ").reverse().join(" ");
  console.log(res);
};
reverseWords("Let's  take LeetCode contest");
