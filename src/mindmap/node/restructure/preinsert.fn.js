
/**
 * 
 * 预插入节点
 * 
 * @import getRegion from ..region
 * 
 * @import is from ..is.visibility
 * 
 * @import create from math.region.create
 * 
 * @import getParentNode from ..parent scoped
 * 
 * @import insertFirst from ..insert.first scoped
 * 
 * @import insertLast from ..insert.last scoped
 * 
 * @import insertBefore from ..insert.before scoped
 * 
 * @import insertAfter from ..insert.after scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @param {object} xy 坐标信息
 * 
 * @param {number} xy.y 纵坐标
 * 
 */

if(is(node)){

    let outY = getRegion(node).getOutOfBoundOffsetY(y),
        parentNode = getParentNode(node),
        {
            placeholderNode
        } = this;

    if(outY > 0){

        insertFirst(parentNode , placeholderNode) ;
    
    }else if(outY < 0){

        insertLast(parentNode , placeholderNode) ;
    
    }else{

        let {
            x,
            height
        } = node ;

        height / 2 ;

        if(create({
            x,
            height
        }).contains(xy)){

            insertBefore(placeholderNode , node) ;

        }else{

            insertAfter(placeholderNode , node) ;
        }
    }
}