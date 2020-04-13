
/**
 * 
 * 清空缓存
 * 
 * @import add from event.listener.add
 * 
 * @import clear from .clear scoped
 * 
 */

 function main(){

   let me = this,
   {
      proxy,
      readyState
   } = me ;
  
   switch(readyState){
  
     case -1:
     case 1:

        me.readyState = 2 ;

        me.fireEvent('unloading') ;

        doClear.call(me , proxy.call('clearCache')) ;
  
        break ;
  
     case 0:
  
        add(me , 'load' , () => clear() , {
           once:true
        }) ;
   }
 }

 function doClear(result){

   let me = this ;

   if(isPromise(result)){

      result.then(doClear) ;
   
   }else{

      me.readyState = 3 ;

      delete me.data ;

      me.fireEvent('unload') ;
   }

 }

 