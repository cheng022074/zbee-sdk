
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

   proxy.set(expandedField , true) ;

   proxy.fireEvent('expand') ;

 }