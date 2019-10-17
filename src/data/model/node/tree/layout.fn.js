
/**
 * 
 * 布局
 * 
 * @import is.function
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

let computedMarginRight ;

if(!isFunction(marginRight)){

    computedMarginRight = () =>{

        return marginRight ;
    } ;

}else{

    computedMarginRight = marginRight ;
}

for(let childNode of children){

    let {
        scopeHeight
    } = childNode ;

    childNode.set('x' , x + computedMarginRight(me , childNode)) ;

    childNode.set(childNode.setAnchorXY({
        y:startY + scopeHeight / 2
    } , 'c')) ;

    startY += scopeHeight + marginBottom;

    childNode.layout() ;
}