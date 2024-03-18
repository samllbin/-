var countNodes = function(root){
    const getNodeSum = function(root){
        if(root === null){
            return 0;
        }

        let left = getNodeSum(root.left);
        let right = getNodeSum(root.right);

        return left+right+1;
    }

    return getNodeSum(root);
}

var countNodes1 = function(root){
    if(root === null){
        return 0;
    }
    let queue = [root];
    let num = 0;
    while(queue.length){

        let len = queue.length;
        for(let i = 0; i < len; i++){
            let node = queue.shift()
            num++;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right)
        }
    }
    return num
}