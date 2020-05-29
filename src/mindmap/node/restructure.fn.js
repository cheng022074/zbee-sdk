
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
 * @import getOutOfBoundOffsetY from math.region.bound.out.y
 * 
 * @import from from math.region.from
 * 
 * @import getRegion from .region.scope scoped
 * 
 * @import get from .get scoped
 * 
 * @import is from .is.visibility
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
    visibilityNodes
} = me;

if(!restructuring || restructureIndicateLocked){

    return ;
}

 if(id){

    preinsert(get(id) , xy) ;
 
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

            if(getOutOfBoundOffsetY(from(getRegion(childNode)) , y) === 0){

                preinsert(childNode , xy) ;

                break ;
            }
        }   
    }
 }