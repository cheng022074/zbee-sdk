
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

            node.expanded = false ;

            let {
                leafNodes
            } = node ;

            for(let leafNode of leafNodes){

                hidden(leafNode , node) ;
            }

            layout() ;
        }
    }
}

function hidden(node , rootNode){

    node.hidden = true;

    let parentNode ;

    while(parentNode = getParentNode(node),parentNode !== rootNode){

        parentNode.hidden = true;

        node = parentNode ;
    }
    
}