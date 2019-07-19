
/**
 * 
 * 当前节点下的所有叶子节点
 * 
 * @return {array} 节点集合 
 * 
 */

 let me = this,
 {
    expanded,
    hidden
 } = me;

 if(hidden){

   return [] ;
 }

 if(!expanded){

   return [
      me
   ] ;
 }


let leafNodes = [],
   {
      children
   } = me;

for(let childNode of children){

   leafNodes.push(...childNode.leafNodes) ;
}

return leafNodes ;