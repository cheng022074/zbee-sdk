
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
 * @import getRegion from .region.scope scoped
 * 
 * @import getParentNode from .parent scoped
 * 
 * @import insertAfter from .insert.after scoped
 * 
 * @import insertBefore from .insert.before scoped
 * 
 * @import insertFirst from .insert.first scoped
 * 
 * @import insertLast from .insert.last scoped
 * 
 * @param {object} xy 坐标
 * 
 */

async function main(xy){

    let me = this,
    {
        restructureIndicateLocked,
        restructuring,
        placeholderNode
    } = me;

    if(!restructuring || restructureIndicateLocked){

        return ;
    }

    let {
        visibilityNodes
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

            if(childNode === placeholderNode){

                continue ;
            }

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

                restructurePosition.node = childNode ;
        
                break ;
            }
        }

    }else{

        restructurePosition.type = 'insertLast' ;
    }

    if(!restructurePosition.type){

        return ;
    }

    let {
        restructurePosition:oldRestructurePosition
    } = me ;

    if(!oldRestructurePosition){

        reInsert.call(me , restructurePosition) ;

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

            reInsert.call(me , restructurePosition) ;
        }

    }

}

function reInsert(restructurePosition){

    let me = this,
    {
        placeholderNode,
        restructureIndicatedNode
    } = me,
    {
        type,
        node
    } = restructurePosition;

    me.restructurePosition = restructurePosition ;

    let {
        parentNodeId
    } = placeholderNode ;

    if(parentNodeId){

        let {
            children
        } = getParentNode(placeholderNode) ;

        placeholderNode.hidden = true ;
   
        placeholderNode.parentNodeId = null ;

        children.splice(children.indexOf(placeholderNode) , 1) ;
    }

    switch(type){

        case 'insertFirst':

            insertFirst(restructureIndicatedNode , placeholderNode) ;

            break ;

        case 'insertLast':
            
            insertLast(restructureIndicatedNode , placeholderNode) ;

            break ;

        case 'insertBefore':

            insertBefore(placeholderNode , node) ;

            break ;

        case 'insertAfter':

            insertAfter(placeholderNode , node) ;
    }

    console.log(type  , restructureIndicatedNode , node) ;

    placeholderNode.hidden = false ;

    layout() ;
}