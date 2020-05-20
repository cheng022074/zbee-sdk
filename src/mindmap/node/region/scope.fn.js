
/**
 * 
 * 获得当前节点作用区域
 * 
 * @import isSized from ..sized
 * 
 * @import getTopXY from ..xy.top
 * 
 * @import getBottomXY from ..xy.bottom
 * 
 * @import getRightXY from ..xy.right
 * 
 * @param {data.Record} node 节点
 * 
 * @return {object}  节点作用区域信息
 * 
 */

let {
    x,
    y,
    hidden
} = node ;

 if(isSized(node) && !hidden){

    let {
        width,
        height,
        expanded
    } = node ;

    if(expanded){

        let {
            children
        } = node;

        if(children.length){

            let {
                y:topY
            } = getTopXY(children[0]),
            {
                y:bottomY
            } = getBottomXY(children[children.length - 1]),
            maxRightX = 0;

            for(let childNode of children){

                let {
                    x:rightX
                } = getRightXY(childNode) ;

                if(maxRightX < rightX){

                    maxRightX = rightX ;
                }
            }

            return {
                x,
                y:topY,
                width:maxRightX - x,
                height:bottomY - topY
            } ;
        }
    }

    return {
        x,
        y,
        width,
        height
    } ;
    
 }

 return {
    x,
    y,
    width:0,
    height:0
} ;
