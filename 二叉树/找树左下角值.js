var findBottomLeftValue = function(root){
    let maxPath = 0, resNode = null;

    const dfs = function(root, curPath){
        if(root.left === null && root.right === null){
            if(curPath > maxPath){
                maxPath = curPath;
                resNode = root.val;
            }
        }
        root.left && dfs(root.left, curPath + 1);
        root.right && dfs(root.right, curPath + 1);
    }

    dfs(root, 1);
    return resNode;
}

var findBottomLeftValue = function(root) {
    //考虑层序遍历 记录最后一行的第一个节点
    let queue = [];
    if(root === null) { 
        return null;
    }
    queue.push(root);
    let resNode;
    while(queue.length) {
        let length = queue.length;
        for(let i = 0; i < length; i++) {
            let node = queue.shift();
            if(i === 0) {
                resNode = node.val;
            }
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return resNode;
};