
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
    childCountScopeHeight,
} = me ;

return Math.max(height , childCountScopeHeight) ;