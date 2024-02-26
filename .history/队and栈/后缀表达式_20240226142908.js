/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (const token of tokens) {
    if (isNaN(Number(token))) {
      const n1 = stack.pop();
      const n2 = stack.pop();
      switch (token) {
        case "+":
          stack.push(n2 + n1);
          break;
      }
    }
  }
};
