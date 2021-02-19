
/**
 * 
 * 插入新建节点
 * 
 * @import create from ..create scoped
 * 
 * @import insert from ..insert scoped
 * 
 * @import select from ..select scoped
 * 
 * @param {mixed} baseNode 参照节点
 * 
 * @param {string} region 位置
 * 
 * @return {boolea} 插入状态标识
 * 
 */

 let insertNode = create() ;

 if(insert(insertNode , baseNode , region)){

    select(insertNode) ;

    return true ;
 }

 return false ;