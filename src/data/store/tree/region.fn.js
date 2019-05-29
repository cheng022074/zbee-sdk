
/**
 * 
 * 返回当前脑图区域信息
 * 
 * @return {mixed} 返回说明 
 * 
 */

let {
    rootNode
} = this,
{
    x,
    y,
    firstDescendantNodes,
    lastDescendantNodes
} = rootNode;

if(x > 0){

    x = 0 ;
}

let right = x ;

for(let node of firstDescendantNodes){

    let {
        x:nodeX,
        y:nodeY
    } = node.getAnchorXY('tr') ;

    if(right < nodeX){

        right = nodeX ;
    }

    if(y > nodeY){

        y = nodeY ;
    }
}

if(y > 0){

    y = 0 ;
}

let bottom = y ;

for(let node of lastDescendantNodes){

    let {
        x:nodeX,
        y:nodeY
    } = node.getAnchorXY('br') ;

    if(right < nodeX){

        right = nodeX ;
    }

    if(bottom < nodeY){

        bottom = nodeY ;
    }
}

return {
    x,
    y,
    width:right - x,
    height:bottom - y
} ;