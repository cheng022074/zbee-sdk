
/**
 * 
 * 深度收起
 * 
 * @import from from ..from scoped
 * 
 * @import getDescendantNodes from ....nodes.descendant scoped
 * 
 * @import select from ..select scoped
 * 
 * @param {mixed} node 脑图节点
 * 
 * 
 */

node = from(node) ;

let nodes = getDescendantNodes(node),
    isCollapse = false,
    isSelectedNodeHidden = false;

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

    if(node.selected){

        isSelectedNodeHidden = true ;

        node.selected = false ;
    }

    node.hidden = true ;
}

node.expanded = false ;

if(isSelectedNodeHidden){

    return isCollapse || select(node) ;
}

return isCollapse ;