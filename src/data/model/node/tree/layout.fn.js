
/**
 * 
 * 布局
 * 
 * 
 */

let me = this,
    {
        expanded
    } = me;

if(!expanded){

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

let startY = centerY - childCountScopeHeight / 2,
    {
        children
    } = me;

x += marginRight;

for(let childNode of children){

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