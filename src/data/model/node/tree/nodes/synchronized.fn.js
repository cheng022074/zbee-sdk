
/**
 * 
 * 当前节点是否同步
 * 
 * @return {boolean} 如果返回 true , 则表示已同步，否则表示未同步 
 * 
 */

let {
    isLeaf,
    children
} = this ;

return !isLeaf && children.length !== 0 ;