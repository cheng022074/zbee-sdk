
/**
 * 
 * 布局
 * 
 */

 let me = this,
 {
    isRoot,
    isLeaf,
    x,
    y,
    width,
    height,
    $children:children,
    tree
 } = me,
 {
    length
 } = children,
 {
    horizontalSpacing = 5,
    verticalSpacing = 5
 } = tree.layoutConfig,
 startX = x + width + horizontalSpacing,
 startY;

 if(isRoot){

    let countHeight = 0 ;

    for(let child of children){

        countHeight += child.regionHeight;
    }

    startY = countHeight + (length - 1) * verticalSpacing  - height / 2;

 }else{

    startY = y ;
 }

 for(let child of children){

    child.x = startX ;

    child.y = startY ;

    startY += child.height + verticalSpacing ;

    child.layout() ;
}

if(isRoot){

    tree.proxy.call('layout' , tree.data) ;

}else if(!isLeaf){

    let {
        first,
        last
    } = me ;

    me.y = (last.y + last.height - first.y) / length + height / 2 ; 
}