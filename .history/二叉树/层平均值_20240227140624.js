var averageOfLevels = function (root) {
  if (!root) return [];
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let len = queue.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      sum += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(sum / len);
  }
  return res;
};
