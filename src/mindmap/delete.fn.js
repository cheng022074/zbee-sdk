
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
 * @import layout from .layout scoped
 * 
 * @import removeById from .delete.id scoped
 * 
 * @import order from .order scoped
 * 
 * @import cancelEllipsis from .node.ellipsis.cancel.passive scoped
 * 
 * @param {string} [id] 节点编号
 * 
 */

 let me = this,
 {
    restructuring
 } = me;

 if(restructuring){

    return ;
 }


if(id){

    removeById(id) ;

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

        order(parentNode) ;

        cancelEllipsis() ;

        layout() ;
    }

}