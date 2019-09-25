
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
 } = deploy(false , connections , component) ;

 const {
    mounted:originMounted = empty,
    destroyed:originUnmounted = empty,
    ...options
 } = component;

 async function onMounted(){

    let me = this ;

    await mounted.call(me) ;
       
    originMounted.call(me) ;
 }

 async function onUnmounted(){

    let me = this ;

    await originUnmounted.call(me) ;

    unmounted.call(me) ;
 }

 return {
    mounted(){

        onMounted.call(this) ;
    },

    destroyed(){

        onUnmounted.call(this) ;
    },

    ...options
 } ;