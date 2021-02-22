
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
    {
        placeholderNode,
        draggingNode,
        dragNodeDiscernRadius
    } = this;

right -= dragNodeDiscernRadius ;

node = fromNode(node) ;

if(node === draggingNode || node === placeholderNode){

    return false ;
}

if(x > right){

    expand(node) ;

    if(interceptors.onBeforeNodeAppend(getData(node) , getData(draggingNode)) !== false){

        return append(placeholderNode , node) ;
    }
    
}else if(y > centerY){

    if(interceptors.onBeforeNodeInsertAfter(getData(getParentNode(node)) , getData(draggingNode) , getData(node)) !== false){

        return insertAfter(placeholderNode , node) ;
    }

}else{

    if(interceptors.onBeforeNodeInsertBefore(getData(getParentNode(node)) , getData(draggingNode) , getData(node)) !== false){

        return insertBefore(placeholderNode , node) ;
    }
}

return false ;
