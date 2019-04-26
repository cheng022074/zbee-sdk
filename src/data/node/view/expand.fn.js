
/**
 * 
 * 展开
 * 
 */

 let me = this,
 {
    proxy,
    expandedField
 } = me ;

 if(proxy.get(expandedField) !== true){

   let {
      cacheChildNodes,
      childNodesField
   } = me ;
   
   if(cacheChildNodes){

      proxy.set(childNodesField , cacheChildNodes) ;

      delete me.cacheChildNodes ;

      proxy.set(expandedField , true) ;
   }

 }