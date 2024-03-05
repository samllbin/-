var levelOrder = function (root) {
  let res = [],
    queue = [];
  queue.push(root);

  while (queue.length && root !== null) {
    let length = queue.length;

    let curLevel = [];
    while (len--) {
      let node = queue.shift();
      curLevel.push(node.value);

      for (let item of node.children) {
        item && curLevel.push(item);
      }
    }
  }
};
