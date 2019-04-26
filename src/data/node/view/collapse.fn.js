
/**
 * 
 * 收起
 * 
 */

let me = this,
{
   proxy,
   childNodesField,
   expandedField
} = me ;

if(proxy.get(expandedField) === true){

   me.cacheChildNodes = proxy.get(childNodesField) ;

   proxy.set(childNodesField , []) ;

   proxy.set(expandedField , false) ;
}