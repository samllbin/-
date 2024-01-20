var reverseWords = function (s) {
  let res = s.split(" ").reverse().join(" ");
  console.log(res);
};

console.log(reverseWords("Let's  take LeetCode contest"));
