
/**
 * 
 * 收起
 * 
 */

let me = this,
{
   proxy,
   expandedField
} = me ;

if(proxy.get(expandedField) === true){
  
   proxy.set(expandedField , false) ;

   proxy.fireEvent('collapse') ;

}