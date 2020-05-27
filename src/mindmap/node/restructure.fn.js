
/**
 * 
 * 函数实现说明
 * 
 * @import fireDrawEvent from ..fire.draw scoped
 * 
 * @import expand from .expand scoped
 * 
 * @import tryLayout from ..layout.try scoped
 * 
 * @param {object} xy 坐标
 * 
 */

let me = this,
{
    restructureIndicateLocked,
    restructuring
} = me;

if(!restructuring || restructureIndicateLocked){

    return ;
}

let {
   visibilityNodes,
   selectedNode
} = me,
parentNode = visibilityNodes.getNearestParentNode(xy),
{
    indicated
} = parentNode;

if(!indicated){

    let {
        restructureIndicatedNode
    } = me ;

    if(restructureIndicatedNode){

        restructureIndicatedNode.indicated = false ;
    }

    parentNode.indicated = true ;

    me.restructureIndicatedNode = parentNode ;

    if(!parentNode.expanded){

        me.restructureIndicateLocked = true ;

        expand(parentNode) ;

        await tryLayout() ;

        me.restructureIndicateLocked = false ;
    
    }else{

        fireDrawEvent() ;
    }
}