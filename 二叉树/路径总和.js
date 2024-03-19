var hasPathSum = function(root, targetsum) {
    const traversal = (node ,cnt) => {
        if(cnt === 0 && !node.left && !node.right) return true;
        if(!node.left && !node.right) return false
        if(node.left && traversal(node.left, cnt-node.left.val)) return true;
        if(node.right && traversal(node.right, cnt-node.right.val)) return true;
        return false
    }

    if(!root) return false
    return traversal(root, targetsum - root.val)
}