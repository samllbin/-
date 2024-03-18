var binaryTreePaths = function(root){
    if(!root) return [];
    let res = []

    const getPath = function(root, curPath){
        if(root.left === null && root.right === null){
            curPath += root.val
            res.push(curPath);
            return;
        }

        curPath += root.val + '->'

        root.left && getPath(root.left, curPath);
        root.right && getPath(root.right, curPath);

    }

    getPath(root, "");
    return res;
}