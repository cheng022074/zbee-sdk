
/**
 * 
 * 节点尾部之前的位置
 * 
 * @import fly from object.proxy.fly
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

        return nodes.indexOf(lastNode) ;
    }

    return nodes.indexOf(node) + 1 ;
 }