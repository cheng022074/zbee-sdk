
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
 * @import data from ..data scoped
 * 
 * @param {data.Record} node 节点
 * 
 * @param {object} xy 坐标信息
 * 
 * @return {boolean} 插入如果成功执行则返回 true , 否则返回 false
 * 
 */

if(is(node)){

    let region = from(data(node)),
    {
        y
    } = xy,
    outY = getOutOfBoundOffsetY(region , y),
    {
        placeholderNode
    } = this,
    result;

    if(outY > 0){

        result = insertBefore(placeholderNode , node) ;
    
    }else if(outY < 0){

        result = insertAfter(placeholderNode , node) ;
    
    }else{

        let {
            top:nodeY
        } = region,
        {
            height
        } = node;

        if(y <= nodeY + height / 2){

            result = insertBefore(placeholderNode , node) ;

        }else{

            result = insertAfter(placeholderNode , node) ;
        }
    }

    return !! result ;
}

return false ;