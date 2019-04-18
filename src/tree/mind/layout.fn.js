
/**
 * 
 * 基于根节点进行布局
 * 
 */

let me = this,
{
    rootNode,
    rootXY,
} = me;

if(rootNode){

    let {
        x,
        y
    } = rootXY ;

    rootNode.x = x ;

    rootNode.y = y ;

    rootNode.layout() ;

    let {
        proxy,
        data
    } = me,
    {
        firstLeaf,
        lastLeaf,
        deepestLeaf
    } = rootNode;

    if(!firstLeaf){

        firstLeaf = rootNode ;
    }

    if(!lastLeaf){

        lastLeaf = rootNode ;
    }

    if(!deepestLeaf){

        deepestLeaf = rootNode ;
    }

    let top = firstLeaf.y ;

    if(top > 0){

        top = 0 ;
    
    }else{

        top = - top ;
    }

    let left = rootNode.x ;

    if(left > 0){

        left = 0 ;
    
    }else{

        left = -left ;
    }

    proxy.call('layout' , data , {
        left,
        right:deepestLeaf.x + deepestLeaf.width,
        top,
        bottom:lastLeaf.y + lastLeaf.height
    }) ;
}

