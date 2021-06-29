
/**
 * 
 * 添加新建节点
 * 
 * @import append from ..append scoped
 * 
 * @import select from ..select scoped
 * 
 * @param {object} [node = {}] 创建节点配置
 * 
 * @param {mixed} [parentNode] 参照节点
 * 
 * @return {boolea} 添加状态标识
 * 
 */

if(append(node , parentNode)){

   select(node) ;

   return true ;
}

return false ;