//前序迭代
var preorderTraversal = function (root, res = []) {
  if (!root) return res;
  let stack = [root];
  let node = null;
  while (stack.length) {
    node = stack.pop();
    res.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return res;
};
