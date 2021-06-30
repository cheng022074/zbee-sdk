
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
 * @param {object} [node = {}] 创建节点配置
 * 
 * @param {mixed} baseNode 参照节点
 * 
 * @param {string} region 位置
 * 
 * @return {boolea} 插入状态标识
 * 
 */

 if(node = insert(node , baseNode , region)){

    select(node) ;

    return true ;
 }

 return false ;