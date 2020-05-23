
/**
 * 
 * 展开节点
 * 
 * @import isLeaf from .node.is.leaf scoped
 * 
 * @import tryLayout from .layout.try scoped  
 * 
 * @param {string} id 节点编号
 * 
 */

 async function main(id){

    let me = this,
    {
        visibilityNodes
    } = me ;

    if(visibilityNodes.has(id)){

        let node = visibilityNodes.get(id),
        {
            expanded
        } = node;

        if(!expanded && !isLeaf(node)){

            node.expanded = true ;

            let {
                children
            } = node ;

            for(let childNode of children){

                visibility(childNode) ;
            }

            await tryLayout() ;
        }
    }
 }

 function visibility(node){

    node.hidden = false ;

    let {
        expanded
    } = node ;

    if(expanded && !isLeaf(node)){

        let {
            children
        } = node ;

        for(let childNode of children){

            visibility(childNode) ;
        }
    }
 }