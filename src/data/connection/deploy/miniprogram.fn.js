
/**
 * 
 * 基于数据连接的小程序封装
 * 
 * @import empty from function.empty value
 * 
 * @import deploy from ..lifecycle
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
    unmounted,
    open,
    close
} = deploy(connections , component) ;

const {
   onLoad:originMounted = empty,
   onUnload:originUnmounted = empty,
   ...options
} = component;

return {
    ...options,
    onLoad(options){

       let me = this ;

       mounted.call(me) ;

       me.$connections = connections ;
      
       originMounted.call(me , options) ;
   },

   onUnload(){

       let me = this ;

       originUnmounted.call(me) ;

       delete me.$connections ;

       unmounted.call(me) ;
   },

   closeConnection(){

        close() ;
   },

   openConnection(){

        open() ;
   }
} ;