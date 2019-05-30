
/**
 * 
 * 所有子节点的总范围高度
 * 
 * @return {number} 总高度 
 * 
 */

let countHeight = 0,
    {
        childNodes,
        store
    } = this ;

if(childNodes.length){

    for(let {
        scopeHeight
    } of childNodes){

        countHeight += scopeHeight ;
    }

    countHeight += store.marginBottom * (childNodes.length - 1);

    return countHeight ;
}

return 0 ;