var isSymmetric = (root) => {
    const compared = (left, right) => {
        if(left === null && right === null){
            return true
        }else if(left === null && right !== null || left !== null && right === null) {
            return false;
        }else if(left.val !== right.val){
            return false
        }

        let outSide = compared(left.left, right.right);
        let inSide = compared(left.right, right.left);
        return outSide && inSide
    }
    if(root === null){
        return true
    }
    return compared(root.left, root.right)
}