
/**
 * 
 * 设置子节点集合
 * 
 * @import from from array.from
 * 
 * @import remove from ....remove scoped
 * 
 * @import append from ....append scoped
 * 
 * @param {array} children 子节点集合
 * 
 * 
 */

 let me = this,
 {
    $children
 } = me ;

 {
   let childNodes = from($children) ;

   for(let childNode of childNodes){

      remove(childNode) ;
   }
 }

 for(let childNode of children){

   $children.push(childNode) ;

   childNode.parentNode = me ;
 }

