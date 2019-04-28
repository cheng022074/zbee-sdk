
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

 if(me.expanded === false){

   return ;
 }

 if(isRoot){

    let countHeight = 0 ;

    for(let child of children){

        countHeight += child.regionHeight;
    }

    startY = y - (countHeight + (length - 1) * verticalSpacing) / 2  + height / 2;

 }else{

    startY = y ;
 }

 for(let child of children){

    child.x = startX ;

    child.y = startY ;

    startY += child.regionHeight + verticalSpacing ;

    child.layout() ;
}

if(!isRoot && !isLeaf){

    let {
        first,
        last
    } = me ;

    me.y = first.y + (last.y + last.height - first.y) / 2 - height / 2 ; 
}