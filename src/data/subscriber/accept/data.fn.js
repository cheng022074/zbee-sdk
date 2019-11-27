/**
 * 
 * 将推送数据传递给绑定函数
 * 
 * @import is.defined
 * 
 * @param {mixed} data 推送过来的数据
 * 
 * @return {mixed} 返回说明 
 * 
 */

 let me = this,
 {
    bindFn,
    closed,
    params,
    cache,
    getCacheData
 } = me ;

 if(!closed){

   if(isDefined(cache)){

      bindFn(getCacheData(cache) , params) ;
   
   }else{

      bindFn(data , params) ;
   }

   me.fireEvent('data' , data , params) ;
 }