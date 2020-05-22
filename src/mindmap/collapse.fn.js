
/**
 * 
 * 收起节点
 * 
 * @import isLeaf from .node.is.leaf scoped
 * 
 * @import layout from .layout scoped
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import getLeafNodes from .nodes.leaf scoped
 * 
 * @param {string} id 节点编号
 * 
 */

function main(id){

    let me = this,
    {
    visibilityNodes
    } = me ;

    if(visibilityNodes.has(id)){

        let node = visibilityNodes.get(id),
        {
            expanded
        } = node;

        if(expanded && !isLeaf(node)){

            let leafNodes,
                length;

            let count = 0 ;

            while(leafNodes = getLeafNodes(node),length = leafNodes.length){

                console.log('leafNodes' , leafNodes) ;

                if(length === 1 && leafNodes[0] === node){

                    break ;
                }

                if(count === 5){

                    break ;
                }

                for(let leafNode of leafNodes){

                    leafNode.hidden = true ;
                }
            }

            node.expanded = false ;

            layout() ;
        }
    }
}