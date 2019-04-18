
/**
 * 
 * 当前节点所占的区域高度
 * 
 * @return {nubmber} 高度值 
 * 
 */

 let {
    leafDescendants,
    tree,
    height
 } = this,
 {
    verticalSpacing = 5
 } = tree.layoutConfig,
 {
     length
 } = leafDescendants;

 if(length){

    let countHeight = 0;

    for(let descendant of leafDescendants){

        countHeight += descendant.height ;
    }

    return countHeight + verticalSpacing * (length - 1) ;
 }

 return height ;

