
/**
 * 
 * 获取属性
 * 
 * @import is.function
 * 
 * @import get from ..inner.get
 * 
 * @param {string} name 属性名称
 * 
 * @param {function} onGet 获取属性值
 * 
 */
 
return function(){

   let me = this,
       value = get(me , name) ;

   if(isFunction(onGet)){

       return onGet.call(me , value) ;
   }

   return value ;
} ;