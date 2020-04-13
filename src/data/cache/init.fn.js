
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
 * @param {mixed} operation 初始化缓存行为
 * 
 * @param {boolean} [isForceRefreshLocal = false] 是否强行刷新本地缓存
 * 
 */

 function main(operation){

   let me = this,
   {
      readyState,
      proxy
   } = me ;

   if(readyState === 0){

      me.readyState = 1 ;

      me.fireEvent('loading') ;

      if(proxy.call('hasCache')){

         doInstall.call(me , proxy.call('getCache')) ;

      }else{

         doInit.call(me , operation) ;
      }
   }

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

      me.readyState = 2 ;

      me.fireEvent('load') ;
   }
 }