
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
 * @import getRegion from .region.scope scoped
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

    delete me.restructurePosition ;

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

        return ;
    
    }
}

let {
    restructureIndicatedNode
} = me,{
    children
} = restructureIndicatedNode,
{
    y
} = xy;

let {
    y:top,
    height
} = getRegion(restructureIndicatedNode),
bottom = top + height,
restructurePosition = {

};

if(y <= top){

    restructurePosition.type = 'insertFirst' ;

} else if(y >= bottom){

    restructurePosition.type = 'insertLast' ;

}else if(children.length){

    for(let childNode of children){

        let {
            y:top,
            height
        } = getRegion(childNode),
        bottom = top + height;
    
        if(y >= top && y <= bottom){

            if(y <= top + height / 2){

                restructurePosition.type = 'insertBefore' ;
            
            }else{

                restructurePosition.type = 'insertAfter' ;
            }
    
            break ;
        }
    }

}else{

    restructurePosition.type = 'insertLast' ;
}

let {
    restructurePosition:oldRestructurePosition
} = me ;

if(!oldRestructurePosition){

    me.restructurePosition = restructurePosition ;

    console.log('restructurePosition' , restructurePosition) ;

    fireDrawEvent() ;

}else{

    let {
        type:oldType,
        node:oldNode
    } = oldRestructurePosition,
    {
        type,
        node
    } = restructurePosition;

    if(oldType !== type || oldNode !== node){

        console.log('restructurePosition' , restructurePosition) ;

        fireDrawEvent() ;
    }

}
