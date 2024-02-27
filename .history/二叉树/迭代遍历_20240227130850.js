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

//中序迭代
var inorderTraversal = function (root, res = []) {
  let stack = [root];
  let cur = root;
  while (cur !== NULL || !stack.length) {
    if (cur !== NULL) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
};
