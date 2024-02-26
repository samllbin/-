/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let result = [];
  for (const x of s) {
    if (x === result[result.length - 1]) {
      result.pop();
    } else {
      result.push(x);
    }
  }
  return result.join("");
};
