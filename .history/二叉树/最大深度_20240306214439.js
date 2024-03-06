var maxDepth = function (root) {
  if (root === null) return 0;
  let queue = [root];
  let height = 0;

  while (queue.length) {
    let n = queue.length;
    height++;
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      node.left && queue.push(node.left);
    }
  }
};
