//前序迭代
var preorderTraversal = function (root, res = []) {
  if (!root) return res;
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
};
