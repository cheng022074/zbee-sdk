
/**
 * 
 * 基于数据连接的 VUE 封装
 * 
 * @import empty from function.empty value
 * 
 * @import deploy from ..object
 * 
 * @param {object} connections 订阅对象
 * 
 * @param {object} component 组件定义对象
 * 
 * @return {object} 增加订阅功能的组件定义对象
 * 
 */

let {
    mounted,
    unmounted
} = deploy(component) ;

const {
   onLoad:originMounted = empty,
   onUnload:originUnmounted = empty,
   ...options
} = component;

return {
    onLoad(){

       let me = this ;

       mounted.call(me) ;
      
       originMounted.call(me) ;
   },

   onUnload(){

       let me = this ;

       originUnmounted.call(me) ;

       unmounted.call(me) ;
   },

   ...options
} ;