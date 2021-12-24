
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
 * @param {boolean} [isSelectNode = true] 是否选定添加节点
 * 
 * @return {boolea} 添加状态标识
 * 
 */

if(node = append(node , parentNode)){

   if(isSelectNode){

      select(node) ;
   }

   return node ;
}

return false ;