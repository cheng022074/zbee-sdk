
/**
 * 
 * 基于数据连接的 VUE 封装
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
     unmounted
 } = deploy(connections , component , function(){

    return this.connectionId ;

 }) ;

 const {
    mounted:originMounted = empty,
    destroyed:originUnmounted = empty,
    ...options
 } = component;

 return {
    mounted(){

      let me = this ;

      mounted.call(me) ;
         
      originMounted.call(me) ;
    },

    destroyed(){

      originUnmounted.call(me) ;

      unmounted.call(me) ;
      
    },

    ...options
 } ;