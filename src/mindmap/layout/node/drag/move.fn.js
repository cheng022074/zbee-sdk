
/**
 * 
 * 拖曳节点
 * 
 * @import getAnchorY from math.region.y.anchor
 * 
 * @import from from math.region.from
 * 
 * @import fromNode from mindmap.node.from scoped
 * 
 * @import insertBefore from mindmap.node.insert.before scoped
 * 
 * @import insertAfter from mindmap.node.insert.after scoped
 * 
 * @import expand from mindmap.node.expand scoped
 * 
 * @import append from mindmap.node.append scoped
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @import getData from mindmap.node.data scoped
 * 
 * @import isRootNode from ..is.root scoped
 * 
 * @param {object} node 节点
 * 
 * @param {object} xy 坐标
 * 
 * @param {number} xy.x 横坐标
 * 
 * @param {number} xy.y 纵坐标
 * 
 * @param {object} [interceptors = {}] 拦截器设置
 * 
 */

let region = from(node),
    {
        right
    } = region,
    centerY = getAnchorY(region , 'center'),
    me = this,
    {
        placeholderNode,
        draggingNode,
        dragNodeDiscernRadius
    } = me;

right -= dragNodeDiscernRadius ;

node = fromNode(node) ;

if(node.dragging || node.placeholder){

    return false ;
}

let {
    dragOperation:oldDragOperation,
    dragOperationNode:oldDragOperationNode
} = this,
dragOperation,
dragOperationNode;

if(x > right || isRootNode(node)){

    expand(node) ;

    if(interceptors.onBeforeNodeAppend(getData(node) , getData(draggingNode)) !== false){

        dragOperation = 'append' ;

        dragOperationNode = node ;
    }
    
}else if(y > centerY){

    if(interceptors.onBeforeNodeInsertAfter(getData(getParentNode(node)) , getData(draggingNode) , getData(node)) !== false){

        dragOperation = 'insertAfter' ;

        dragOperationNode = node ;
    }

}else{

    if(interceptors.onBeforeNodeInsertBefore(getData(getParentNode(node)) , getData(draggingNode) , getData(node)) !== false){

        dragOperation = 'insertBefore' ;

        dragOperationNode = node ;
    }
}

if(dragOperation && dragOperationNode && (oldDragOperation !== dragOperationNode || oldDragOperationNode !== dragOperationNode)){

    me.dragOperation = dragOperation ;

    me.dragOperationNode = dragOperationNode ;

    switch(dragOperation){

        case 'append':

            return append(placeholderNode , dragOperationNode) ;

        case 'insertBefore':

            return insertAfter(placeholderNode , dragOperationNode) ;

        case 'insertAfter':

            return insertBefore(placeholderNode , dragOperationNode) ;
    }
}

return false ;
