//前序遍历
var preorderTraversal = function (root) {
  let result = [];
  const reverse = (node) => {
    if (node) {
      result.push(node.val);
      reverse(node.left);
      reverse(node.right);
    }
  };
  reverse(root);
  return result;
};
