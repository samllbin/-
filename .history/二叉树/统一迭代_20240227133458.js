//前序统一迭代
var preorderTraversal = function (root, res = []) {
  if (!root) return res;
  let stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
      continue;
    }
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
    stack.push(node);
    stack.push(null);
  }
};
