
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
 * @param {object} node 节点
 * 
 * @param {object} xy 坐标
 * 
 * @param {number} xy.x 横坐标
 * 
 * @param {number} xy.y 纵坐标
 * 
 */

let region = from(node),
    {
        right
    } = region,
    centerY = getAnchorY(region , 'center'),
    {
        placeholderNode,
        draggingNode
    } = this;

node = fromNode(node) ;

if(node === draggingNode || node === placeholderNode){

    return false ;
}

if(x > right){

    if(expand(node)){

        return true ;
    }

    return append(placeholderNode , node) ;
    
}else if(y > centerY){

    return insertAfter(placeholderNode , node) ;

}else{

    return insertBefore(placeholderNode , node) ; 
}
