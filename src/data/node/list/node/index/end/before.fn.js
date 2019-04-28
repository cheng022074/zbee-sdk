
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
    } = me ;

    return nodes.indexOf(get_last_node.call(me , node)) ;
 }