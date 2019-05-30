
/**
 * 
 * 布局
 * 
 * 
 */

let me = this,
    {
        childNodes
    } = me;

if(childNodes.length === 0){

    return ;
}

let {
    childCountScopeHeight,
    store
} = me,
{
    marginBottom,
    marginRight
} = store,
{
    y:centerY
} = me.getAnchorXY('c'),
{
    x
} = me.getAnchorXY('r');

let startY = centerY - childCountScopeHeight / 2 ;

x += marginRight;

for(let childNode of childNodes){

    let {
        scopeHeight
    } = childNode ;

    childNode.set('x' , x) ;

    childNode.set(childNode.setAnchorXY({
        y:startY + scopeHeight / 2
    } , 'c')) ;

    startY += scopeHeight + marginBottom;

    childNode.layout() ;
}