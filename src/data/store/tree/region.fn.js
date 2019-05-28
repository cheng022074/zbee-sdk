
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
    firstDescendantNodes
} = rootNode,
y = 0;

if(x > 0){

    x = 0 ;
}

for(let {
    y:nodeY
} of firstDescendantNodes){

    if(y > nodeY){

        y = nodeY ;
    }
}

return {
    x,
    y
} ;