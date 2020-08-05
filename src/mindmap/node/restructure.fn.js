
/**
 * 
 * 函数实现说明
 * 
 * @import expand from .expand scoped
 * 
 * @import tryLayout from ..layout.try scoped
 * 
 * @import layout from ..layout scoped
 * 
 * @import preinsert from .restructure.preinsert scoped
 * 
 * @import append from .append scoped
 * 
 * @import getOutOfBoundOffsetY from math.region.outOfBoundOffset.y
 * 
 * @import from from math.region.from
 * 
 * @import get from .get scoped
 * 
 * @import is from .is.normal
 * 
 * @param {object} xy 坐标
 * 
 * @param {string} [id] 节点编号
 * 
 */

let me = this,
{
    restructureIndicateLocked,
    restructuring,
    visibilityNodes,
    placeholderNode
} = me;

if(!restructuring || restructureIndicateLocked){

    return ;
}

 if(id){

    let node = get(id) ;

    if(is(node)){

        preinsert(get(id) , xy) ;

        layout() ;
    }

 }else{

    let parentNode = visibilityNodes.getNearestParentNode(xy) ;

    if(parentNode){

        parentNode.indicated = true ;

        if(!parentNode.expanded){

            me.restructureIndicateLocked = true ;

            expand(parentNode) ;

            await tryLayout() ;

            me.restructureIndicateLocked = false ;

            return ;
        
        }

        let {
            children
        } = parentNode,
        {
            y
        } = xy;

        for(let childNode of children){

            if(!is(childNode)){

                continue ;
            }

            let offsetY = getOutOfBoundOffsetY(from(childNode) , y) ;

            if(offsetY >= 0){

                preinsert(childNode , xy) ;

                layout() ;
                
                return ;
            }
        }

        append(parentNode , placeholderNode) ;

        layout() ;
    }
 }