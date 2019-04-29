
/**
 * 
 * 节点尾部之后的位置
 * 
 * @import getIndex from ..before scoped
 * 
 * @param {mixed} node 节点
 * 
 * @return {number} 位置 
 * 
 */

function get_last_node(node){

    let me = this,
    {
        childNodesField
    } = me,
    childNodes = fly(node).get(childNodesField),
    {
        length
    } = childNodes;

    if(length){

        get_last_node.call(me , childNodes[length - 1]) ;
    }

    return node ;
 }

 function main(node){

    let me = this,
    {
        nodes
    } = me,
    lastNode = get_last_node.call(me , node);

    if(lastNode !== node){

        return nodes.indexOf(lastNode) + 1;
    }

    return nodes.indexOf(node) + 1 ;
 }