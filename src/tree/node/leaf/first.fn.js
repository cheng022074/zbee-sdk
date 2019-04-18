
/**
 * 
 * 第一个叶子节点
 * 
 * @return {tree.Node} 节点 
 * 
 */

 
function get_first_node(node){

    let {
        isLeaf
    } = node ;

    if(isLeaf){

        return node ;
    }

    return get_first_node(node.first) ;
 }

 function main(){

    let me = this,
    {
        isLeaf
    } = me ;

    if(isLeaf){

        return
    }

    return get_first_node(me) ;
 }