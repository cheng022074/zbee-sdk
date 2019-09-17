
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

for(let node of firstDescendantNodes){

    let {
        y:nodeY
    } = node.getAnchorXY('tr') ;

    if(y > nodeY){

        y = nodeY ;
    }
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

let {
    x:right
} = rootNode.getAnchorXY('r') ;

for(let leafNode of leafNodes){

    let {
        x
    } = leafNode.getAnchorXY('r') ;

    if(right < x){

        right = x ;
    }
}

const {
    min,
    abs
} = Math ;

x = min(x , 0),
y = min(y , 0) ;

return {
    x:abs(x),
    y:abs(y),
    width:right,
    height:bottom
} ;