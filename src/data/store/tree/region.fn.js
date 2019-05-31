
/**
 * 
 * 返回当前脑图区域信息
 * 
 * @return {mixed} 返回说明 
 * 
 */

let {
    rootNode,
    padding
} = this,
{
    x,
    y,
    firstDescendantNodes,
    lastDescendantNodes,
    leafNodes
} = rootNode;

if(x > 0){

    x = 0 ;
}

for(let node of firstDescendantNodes){

    let {
        x:nodeX,
        y:nodeY
    } = node.getAnchorXY('tr') ;

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
        y:nodeY
    } = node.getAnchorXY('br') ;

    if(bottom < nodeY){

        bottom = nodeY ;
    }
}

let right = rootNode.getAnchorXY('r').x ;

for(let leafNode of leafNodes){

    let {
        x
    } = leafNode.getAnchorXY('c') ;

    if(right < x){

        right = x ;
    }
}

return {
    left:Math.abs(x) + padding,
    top:Math.abs(y) + padding,
    bottom:padding,
    right:padding,
    width:right - Math.max(x , 0),
    height:bottom - Math.max(y , 0)
} ;