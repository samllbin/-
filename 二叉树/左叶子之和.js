var sumOfLeftLeaves = function(root){
    const sumNode = function(root){
        if(root === null) return 0;

        let leftSum = sumNode(root.left);
        let rightSum = sumNode(root.right);

        let midValue = 0;
        if(root.left && root.left.left === null && root.left.right === null){
            midValue += root.left.val
        }

        let sum = midValue + leftSum + rightSum;
        return sum;
    }

    return sumNode(root);
}

var sumOfLeftLeaves1 = function(root) {
    //采用层序遍历
    if(root === null) {
        return null;
    }
    let queue = [];
    let sum = 0;
    queue.push(root);
    while(queue.length) {
      let node = queue.shift();
      if(node.left !== null && node.left.left === null && node.left.right === null) {
          sum+=node.left.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    return sum;
 };