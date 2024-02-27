var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let len = queue.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      arr.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(arr);
  }
};
