
/**
 * 
 * 移动节点
 * 
 * @import layout from .layout scoped
 * 
 * @import query from .node.query scoped
 * 
 * @import append from .node.append scoped
 * 
 * @import insertBefore from .node.insert.before scoped
 * 
 * @import insertAfter from .node.insert.after scoped
 * 
 * @import getParentNode from .node.parent scoped
 * 
 * @import order from .order scoped
 * 
 * @param {string} id 需要移动的节点编号
 * 
 * @param {string} baseId 基准节点编号
 * 
 * @param {string} method 移动方式
 * 
 */

 let node = query(id),
     baseNode = query(id);

if(node && baseNode){

    let me = this,
        oldParentNode = getParentNode(node);

    switch(method){

        case 'append':

            append(baseNode , node) ;

            if(!baseNode.hidden && baseNode.expanded){

                layout() ;
            }

            break ;

        case 'insertBefore':

            if(insertBefore(node , baseNode) && !baseNode.hidden){

                layout() ;
            }

            break ;

        case 'insertAfter':

            if(insertAfter(node , baseNode) && !baseNode.hidden){

                layout() ;
            }
    }

    let parentNode = getParentNode(node) ;

    me.fireEvent('nodemove' , node , parentNode , oldParentNode) ;

    order(parentNode)
}