
/**
 * 
 * 向右移动选择节点
 * 
 * @import select from ....select scoped
 * 
 */

let {
    selectedNode
 } = this,
 {
     expanded
 } = selectedNode;

 if(expanded){

    let {
        children
    } = selectedNode ;

    if(children.length){

        select(children[0].id) ;
    }
 }