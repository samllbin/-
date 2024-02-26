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
        case "-":
          stack.push(n2 - n1);
          break;
        case "*":
          stack.push(n2 * n1);
          break;
        case "/":
          stack.push((n2 / n1) | 0);
          break;
      }
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
};
