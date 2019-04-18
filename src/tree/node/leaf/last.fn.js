
/**
 * 
 * 最后一个叶子节点
 * 
 * @return {tree.Node} 节点 
 * 
 */

 function get_last_node(node){

    let {
        isLeaf
    } = node ;

    if(isLeaf){

        return node ;
    }

    return get_last_node(node.last) ;
 }

 function main(){

    let me = this,
    {
        isLeaf
    } = me ;

    if(isLeaf){

        return
    }

    return get_last_node(me) ;
 }