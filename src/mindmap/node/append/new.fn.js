
/**
 * 
 * 添加新建节点
 * 
 * @import create from ..create scoped
 * 
 * @import append from ..append scoped
 * 
 * @import select from ..select scoped
 * 
 * @param {mixed} [parentNode] 参照节点
 * 
 * @return {boolea} 添加状态标识
 * 
 */

let node = create() ;

if(append(node , parentNode)){

   select(node) ;

   return true ;
}

return false ;