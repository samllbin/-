//前序遍历
var preorderTraversal = function (root) {
  let result = [];
  const reverse = (root) => {
    if (root) {
      result.push(root.val);
      reverse(root.left);
      reverse(root.right);
    }
  };
  reverse(root);
  return result;
};

//中序遍历
var inorderTraversal = function (root) {
  let result = [];
  const reverse = (root) => {
    if (root) {
      reverse(root.left);
      result.push(root.val);
      reverse(root.right);
    }
  };
  reverse(root);
  return result;
};

//后序遍历
var postorderTraversal = function (root) {
  let result = [];
  const reverse = (root) => {
    if (root) {
      reverse(root.left);
      result.push(root.val);
      reverse(root.right);
    }
  };
  reverse(root);
  return result;
};
