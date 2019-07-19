
/**
 * 
 * 获取当前节点的范围高度
 * 
 * @return {number} 高度 
 * 
 */

let me = this,
    {
        height,
        expanded
    } = me ;

if(!expanded){

    return height;
}

let {
    childCountScopeHeight,
} = me ;

return Math.max(height , childCountScopeHeight) ;