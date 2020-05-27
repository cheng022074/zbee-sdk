
/**
 * 
 * 删除当前选中节点
 * 
 * @import isRootNode from .node.is.root scoped
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import isLeaf from .node.is.leaf
 * 
 * @import getLeafNodes from .nodes.leaf scoped
 * 
 * @import layout from .layout scoped
 * 
 */

 
let {
    selectedNode
 } = this ;

 if(!isRootNode(selectedNode)){

    let {
            expanded
        } = selectedNode;

    if(expanded && !isLeaf(selectedNode)){

        let leafNodes,
            length;

        while(leafNodes = getLeafNodes(selectedNode),leafNodes.length !== 1){

            for(let leafNode of leafNodes){

                leafNode.hidden = true ;
            }
        }
    }

    selectedNode.hidden = true ;
    

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
