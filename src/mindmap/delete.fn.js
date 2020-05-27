
/**
 * 
 * 删除当前选中节点
 * 
 * @import isRootNode from .node.is.root scoped
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import hide from .node.hide scoped
 * 
 * @import layout from .layout scoped
 * 
 */

 
let {
    selectedNode
 } = this ;

 if(!isRootNode(selectedNode)){

    hide(selectedNode) ;

    let parentNode = getParentNode(selectedNode),
    {
        children
    } = parentNode,
    {
        length
    } = children,
    index = children.indexOf(selectedNode);

    if(length - 1){

        if(index + 1 <= length - 1){

            children[index + 1].selected = true ;
        }

        if(index - 1 >= 0){

            children[index - 1].selected = true ;
        }
    
    }else{

        parentNode.selected = true ;
    }

    children.splice(children.indexOf(selectedNode) , 1) ;   

    layout() ;
 }
