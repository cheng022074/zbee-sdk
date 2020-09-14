
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
 * @param {boolean} [isSilentMode = false] 是否静默模式
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

    let parentNode = getParentNode(node);

    if(node.selected === true){

        let {
            children
        } = parentNode,
        {
            length
        } = children,
        index = children.indexOf(node),
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

        select(nextSelectedNode) ;
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

    if(!isSilentMode){

        order(parentNode) ;

        me.fireEvent('nodedelete' , deleteNodes) ;
    }
}