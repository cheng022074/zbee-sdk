
/**
 * 
 * 深度收起
 * 
 * @import getDescendantNodes from ....data.nodes.descendant scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * 
 */

 let nodes = getDescendantNodes(node),
     isCollapse = false;

 for(let node of nodes){

    let {
        children,
        expanded,
        hidden
    } = node ;

    if(!hidden && children.length && expanded){

        isCollapse = true ;
    }

    node.expanded = false ;

    node.hidden = false ;
 }

 return isCollapse ;