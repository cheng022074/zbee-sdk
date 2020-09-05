
/**
 * 
 * 删除当前选中节点
 * 
 * @import isRootNode from .node.is.root scoped
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import data from .node.data scoped
 * 
 * @import remove from .node.delete scoped
 * 
 * @import removeById from .delete.id scoped
 * 
 * @import order from .order scoped
 * 
 * @import select from .select scoped
 * 
 * @param {string} [id] 节点编号
 * 
 */

 let me = this,
 {
    restructuring
 } = me;

 if(restructuring){

    return false;
 }


if(id){

    return removeById(id) ;

}else{

    let {
        selectedNode
    } = me ;

    if(!isRootNode(selectedNode)){

        let parentNode = getParentNode(selectedNode),
        {
            children
        } = parentNode,
        {
            length
        } = children,
        index = children.indexOf(selectedNode),
        nextSelectedNode;

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

        let deleteNodes = remove(selectedNode),
            {
                nodes
            } = me;

        for(let {
            id
        } of deleteNodes){

            nodes.delete(id) ;
        }

        me.fireEvent('nodedelete' , deleteNodes) ;

        select(nextSelectedNode.id) ;

        order(parentNode) ;

        return true; 
    }

    return false ;

}