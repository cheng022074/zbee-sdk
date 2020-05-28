
/**
 * 
 * 删除当前选中节点
 * 
 * @import isRootNode from .node.is.root scoped
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import remove from .node.delete scoped
 * 
 * @import layout from .layout scoped
 * 
 */

 
let {
    selectedNode
 } = this ;

 if(!isRootNode(selectedNode)){

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

    remove(selectedNode) ;

    layout() ;
 }
