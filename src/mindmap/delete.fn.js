
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

        while(leafNodes = getLeafNodes(node),length = leafNodes.length,length !== 1){

            for(let leafNode of leafNodes){

                leafNode.hidden = true ;
            }
        }
    }

    selectedNode.hidden = true ;

    let {
        children
    } = getParentNode(selectedNode) ;

    children.splice(children.indexOf(selectedNode) , 1) ;
 }
