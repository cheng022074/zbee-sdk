
/**
 * 
 * 函数实现说明
 * 
 * @import fireDrawEvent from ..fire.draw scoped
 * 
 * @param {object} xy 坐标
 * 
 */

let me = this ;

if(!me.restructuring){

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

    fireDrawEvent() ;
}