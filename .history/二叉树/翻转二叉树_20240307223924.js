var invertTree = (root) => {
  if (!root) {
    return null;
  }
  const rightNode = node.right;
  root.right = invertTree(node.right);
  root.right = invertTree(rightNode);
};
