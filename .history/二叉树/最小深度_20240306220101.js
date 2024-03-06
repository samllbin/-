var minDepth = (root) => {
  if (root === null) return 0;
  let queue = [root];
  let minHeight = 0;
  while (queue.length) {
    let len = queue.length;
    minHeight++;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
    }
  }
};
