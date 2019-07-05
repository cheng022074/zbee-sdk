
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
 } = deploy(connections , component) ;

 const {
    mounted:originMounted = empty,
    destroyed:originUnmounted = empty,
    ...options
 } = component;

 return {
    mounted(){

        let me = this ;

        mounted.call(me) ;

        me.$connections = connections ;
       
        originMounted.call(me) ;
    },

    destroyed(){

        let me = this ;

        originUnmounted.call(me) ;

        delete me.$connections ;

        unmounted.call(me) ;
    },

    ...options
 } ;