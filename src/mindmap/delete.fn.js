
/**
 * 
 * 删除当前选中节点
 * 
 * @import isRootNode from .node.is.root scoped
 * 
 * @import getParentNode from .data.node.parent scoped
 * 
 * @import data from .node.data scoped
 * 
 * @import remove from .node.delete scoped
 * 
 * @import order from .order scoped
 * 
 * @import select from .select scoped
 * 
 * @import from from .node.from scoped
 * 
 * @param {string} [node] 节点编号
 * 
 */

 let me = this,
 {
    restructuring
 } = me;

 if(restructuring){

    return false;
 }

 node = from(node) ;

 if(node && !isRootNode(node)){

    let nextSelectedNode,
        parentNode = getParentNode(node);

    if(node.selected === true){

        let {
            children
        } = parentNode,
        {
            length
        } = children,
        index = children.indexOf(node);

        if(length - 1){

            if(index + 1 <= length - 1){

                nextSelectedNode = children[index + 1] ;
            }

            if(index - 1 >= 0){

                nextSelectedNode = children[index - 1] ;
            }
        
        }else{

            nextSelectedNode = parentNode ;
        }
    }

    if(nextSelectedNode){

        select(nextSelectedNode.id) ;
    }

    let deleteNodes = remove(node),
    {
        nodes
    } = this;

    for(let {
        id
    } of deleteNodes){

        nodes.delete(id) ;
    }


    me.fireEvent('nodedelete' , deleteNodes) ;

    order(parentNode) ;

    return true ;
}

return false ;