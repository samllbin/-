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
  if (s.length % 2 !== 0) return false;
  for (const x of s) {
    if (x in map) {
      stack.push(x);
      continue;
    }
    if (stack.length === 0) return false;
    if (map[stack.pop()] !== x) return false;
  }
  return !stack.length;
};
