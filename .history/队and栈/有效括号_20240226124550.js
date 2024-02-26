/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  if (str.length % 2 !== 0) return false;
  for (const x of s) {
    if (x in map) {
      stack.push(x);
      continue;
    }
  }
};
