
/**
 * 
 * 最后一个叶子节点
 * 
 * @return {data.model.node.Tree} 树型节点 
 * 
 */

let me = this,
{
    isLeaf
} = me ;

if(isLeaf){

    return me ;
}

let node = me.lastChildNode;

while(node && !node.isLeaf && node.synchronized){

    node = node.lastChildNode ;
}

return node ;