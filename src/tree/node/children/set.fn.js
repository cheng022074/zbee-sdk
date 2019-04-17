
/**
 * 
 * 设置子节点集合
 * 
 * @import from from array.from
 * 
 * @import removeChild from ....removeChild scoped
 * 
 * @import appendChild from ....appendChild scoped
 * 
 * @param {array} children 子节点集合
 * 
 * 
 */

 children = from(children) ;

 let me = this,
 {
    $children
 } = me ;

 {
   let childNodes = from($children) ;

   for(let childNode of childNodes){

      removeChild(childNode) ;
   }
 }

 {
   let childNodes = from(children) ;

   for(let childNode of childNodes){

      appendChild(childNode) ;
   }
 }

 