var levelOrder = function (root) {
  let res = [],
    queue = [];
  queue.push(root);

  while (queue.length && root !== null) {
    let length = queue.length;

    let curLevel = [];
    while (length--) {
      let node = queue.shift();
      curLevel.push(node.val);

      for (let item of node.children) {
        item && queue.push(item);
      }
    }
    res.push(curLevel);
  }
  return res;
};
