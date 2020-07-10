
/**
 * 
 * 预插入节点
 * 
 * @import is from ..is.visibility
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @import insertBefore from ..insert.before scoped
 * 
 * @import insertAfter from ..insert.after scoped
 * 
 * @import getOutOfBoundOffsetY from math.region.outOfBoundOffset.y
 * 
 * @import contains from math.region.contains
 * 
 * @import from from math.region.from
 * 
 * @param {data.Record} node 节点
 * 
 * @param {object} xy 坐标信息
 * 
 */

if(is(node)){

    let {
        y
    } = xy,
    outY = getOutOfBoundOffsetY(from(node) , y),
    {
        placeholderNode
    } = this;

    if(outY > 0){

        insertBefore(placeholderNode , node) ;
    
    }else if(outY < 0){

        insertAfter(placeholderNode , node) ;
    
    }else{

        let {
            y:nodeY,
            height
        } = node;

        if(y <= nodeY + height / 2){

            insertBefore(placeholderNode , node) ;

        }else{

            insertAfter(placeholderNode , node) ;
        }
    }
}