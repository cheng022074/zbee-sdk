
/**
 * 
 * 当前节点深度
 * 
 * @return {number} 深度
 * 
 */

let node = this,
parentNode,
depth = 0;

while(parentNode = node.parentNode){

    node = parentNode ;

    depth ++ ;
}

return depth ;