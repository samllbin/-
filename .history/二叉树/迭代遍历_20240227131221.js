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
  let stack = [];
  let cur = root;
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};

//前序为中左右，后序为左右中，所以前序迭代和后序迭代互为逆序x
//后序迭代
var postorderTraversal = function (root, res = []) {
  if (!root) return res;
  let stack = [root];
  let node = null;
  while (stack.length) {
    node = stack.pop();
    res.push(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return res.reverse();
};
