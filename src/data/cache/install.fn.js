
/**
 * 
 * 初始化缓存
 * 
 * @import isPromise from is.promise.native
 * 
 * @import is.function
 * 
 * @import init from .init scoped
 * 
 * @import processData from .data scoped
 * 
 * @import add from event.listener.add
 * 
 * @import is.defined
 * 
 */

 function main(){

   let me = this,
   {
      readyState,
      initOperation,
      proxy
   } = me ;

   return new Promise(resolve => {

      if(!isDefined(readyState)){

         add(me , 'install' , () => resolve() , {
            once:true
         }) ;

         me.readyState = 0 ;
   
         me.fireEvent('installing') ;
   
         if(proxy.call('hasCache')){
   
            doInstall.call(me , proxy.call('getCache')) ;
   
         }else{
   
            doInit.call(me , initOperation) ;
         }

      }else{

         switch(readyState){

            case 3:
               
               add(me , 'install' , () => resolve() , {
                  once:true
               }) ;
      
               me.readyState = 0 ;
         
               me.fireEvent('installing') ;
         
               if(proxy.call('hasCache')){
         
                  doInstall.call(me , proxy.call('getCache')) ;
         
               }else{
         
                  doInit.call(me , initOperation) ;
               }
   
               break ;
   
            case 2:
   
               add(me , 'uninstall' , () => init(initOperation) , {
                  once:true
               }) ;
   
               break ;
   
            case 1:
   
               resolve() ;
   
               break ;
   
            case 0:
   
               add(me , 'install' , () => resolve() , {
                  once:true
               }) ;
   
               break ;
         }
      }

   }) ;
 }

 function doInit(operation){

   if(isPromise(operation)){

      operation.then(doInit) ;
   
   }else if(isFunction(operation)){

      doInit(operation()) ;
   
   }else{

      let me = this,
      {
         proxy
      } = me ;
 
     doInstall.call(me , proxy.call('initCache' , operation)) ;
 
   }
 }

 function doInstall(data){

   if(isPromise(data)){

      data.then(doInstall) ;
   
   }else{

      me.data = processData(data) ;

      me.readyState = 1 ;

      me.fireEvent('install') ;
   }
 }