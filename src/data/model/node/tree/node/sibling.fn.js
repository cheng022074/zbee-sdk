
/**
 * 
 * 返回兄弟节点
 * 
 * @param {data.model.node.Tree} node 节点
 * 
 * @param {number} offset 偏移量
 * 
 * @return {data.model.node.Tree} 节点 
 * 
 */

let me = this,
{
    parentNode
} = me ;

if(parentNode){

    let {
        children
    } = parentNode;

    return children[children.indexOf(me) + offset] ;
}