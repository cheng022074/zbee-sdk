
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
 * @param {object} xy 坐标
 * 
 * @param {number} xy.y 纵坐标
 * 
 * @param {object} originXY 原始坐标
 * 
 * @param {object} [node] 节点
 * 
 */

 

if(node){

    let region = from(node),
        centerY = getAnchorY(region , 'center'),
        {
            placeholderNode,
            draggingNode
        } = this;

    node = fromNode(node) ;

    if(node === draggingNode || node === placeholderNode){

        return false ;
    }

    if(y > centerY){

        return insertAfter(placeholderNode , node) ;
    
    }else{

        return insertBefore(placeholderNode , node) ;
    }
    
}


