
/**
 * 
 * 所有子节点的总范围高度
 * 
 * @return {number} 总高度 
 * 
 */

let me = this,
    {
        expanded
    } = me ;

if(!expanded){

    return 0 ;
}

let countHeight = 0,
    {
        children,
        store
    } = this ;

for(let {
    scopeHeight
} of children){

    countHeight += scopeHeight ;
}

countHeight += store.marginBottom * (children.length - 1);

return countHeight ;