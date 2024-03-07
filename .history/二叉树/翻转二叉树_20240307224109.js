var invertTree = (root) => {
  if (!root) {
    return null;
  }
  const rightNode = root.right;
  root.right = invertTree(root.left);
  root.left = invertTree(rightNode);

  return root;
};
