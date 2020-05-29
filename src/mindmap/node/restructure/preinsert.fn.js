
/**
 * 
 * 预插入节点
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
 * @import getOutOfBoundOffsetY from math.region.bound.out.y
 * 
 * @import contains from math.region.contains
 * 
 * @import from from math.region.from
 * 
 * @import layout from ....layout scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @param {object} xy 坐标信息
 * 
 * @param {number} xy.y 纵坐标
 * 
 */

if(is(node)){

    let region = from(node),
        outY = getOutOfBoundOffsetY(region , y),
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
            top,
            bottom,
            left,
            right
        } = region,
        {
            height
        } = node;

        if(contains({
            top,
            bottom:bottom - height / 2,
            left,
            right
        } , xy)){

            insertBefore(placeholderNode , node) ;

        }else{

            insertAfter(placeholderNode , node) ;
        }
    }

    layout() ;
}