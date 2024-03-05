var largestValues = function (root) {
  if (!root) return [];
  let res = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let len = queue.length;
    let arr = [];
    let max = queue[0];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      max = max > node.val ? max : node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(arr);
  }
  return res;
};
