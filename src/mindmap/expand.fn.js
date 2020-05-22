
/**
 * 
 * 展开节点
 * 
 * @import isLeaf from .node.is.leaf scoped
 * 
 * @import layout from .layout scoped
 * 
 * @import add from event.listener.add
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

        if(!expanded && !isLeaf(node)){

            node.expanded = true ;

            let {
                children
            } = node ;

            for(let childNode of children){

                visibility(childNode) ;
            }

            let {
                unsizedNodes
            } = me ;

            if(unsizedNodes.size){

                add(me , 'nodesized' , layout , {
                    once:true
                }) ;
            
            }else{

                layout() ;
            }
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