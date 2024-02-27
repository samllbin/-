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
    node.right && stack.push(node.right); //右节点入栈
    node.left && stack.push(node.left); //左节点入栈
    stack.push(node); //当前节点入栈
    stack.push(null);
  }
  return res;
};

//中序统一迭代
var inorderTraversal = function (root, res = []) {
  if (!root) return res;
  let stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (!node) {
      res.push(stack.pop().val);
      continue;
    }
  }
};
