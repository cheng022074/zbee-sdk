
/**
 * 
 * 清空缓存
 * 
 * @import add from event.listener.add
 * 
 * @import clear from .clear scoped
 * 
 * @param {boolean} isClearCache 是否同时清理缓存
 * 
 */

 function main(){

   let me = this,
   {
      proxy,
      readyState
   } = me ;
  
   return new Promise(resolve => {

      switch(readyState){

         case 3:

            resolve() ;

            break ;

         case 2:

            add(me , 'uninstall' , () => resolve() , {
               once:true
            }) ;

            break ;

         case 1:

            me.readyState = 2 ;
    
            me.fireEvent('uninstalling') ;

            if(isClearCache){

               doClear.call(me , proxy.call('clearCache')) ;
            
            }else{

               doClear.call(me) ;
            }
      
            break ;
      
         case 0:
      
            add(me , 'install' , () => clear() , {
               once:true
            }) ;
      }

   }) ;
 }

 function doClear(result){

   let me = this ;

   if(isPromise(result)){

      result.then(doClear) ;
   
   }else{

      me.readyState = 3 ;

      delete me.data ;

      me.fireEvent('uninstall') ;
   }

 }

 