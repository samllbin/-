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

function removeExtraSpaces(strArr) {
  let slowIndex = 0;
  let fastIndex = 0;

  while (fastIndex < strArr.length) {
    // 移除开始位置和重复的空格
    if (
      strArr[fastIndex] === " " &&
      (fastIndex === 0 || strArr[fastIndex - 1] === " ")
    ) {
      fastIndex++;
    } else {
      strArr[slowIndex++] = strArr[fastIndex++];
    }
  }

  // 移除末尾空格
  strArr.length = strArr[slowIndex - 1] === " " ? slowIndex - 1 : slowIndex;
}
