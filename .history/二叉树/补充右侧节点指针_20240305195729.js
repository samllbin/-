var connect = function (root) {
  if (!root) return [];
  let queue = [root];
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (i < n - 1) {
        node.next = queue[0];
      }
      node.left && queue.push(node.left);
    }
  }
};
