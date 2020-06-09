
/**
 * 
 * 设置节点层次属性
 * 
 * @import remove from array.remove
 * 
 * @param {data.Record} node 节点
 * 
 * @param {number} level 节点新层次
 * 
 * @param {number} oldLevel 节点原先层次
 * 
 * @return {number} 层数 
 * 
 */

let {
    visibilityNodeLevels
} = this,
{
    id
 } = node ;

 if(oldLevel !== 0){

    let ids = visibilityNodeLevels.get(oldLevel) ;

    remove(ids , id) ;

    if(ids.length === 0){

       visibilityNodeLevels.delete(oldLevel) ;
    }
 }

 if(level !== 0){

    if(!visibilityNodeLevels.has(level)){

       visibilityNodeLevels.set(level , []) ;
    }

    visibilityNodeLevels.get(level).push(id) ;
 
 }

 return level ;