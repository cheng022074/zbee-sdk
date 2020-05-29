
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

    parentNode.indicated = true ;

    if(!parentNode.expanded){

        me.restructureIndicateLocked = true ;

        expand(parentNode) ;

        await tryLayout() ;

        me.restructureIndicateLocked = false ;
    
    }else{

        let {
            children
        } = parentNode ;
    
        for(let childNode of children){
    
            if(getOutOfBoundOffsetY(from(getRegion(childNode)) , xy) === 0){

                preinsert(childNode , xy) ;

                break ;
            }
        }   
    }
 }