
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

const {
    onLoad:originMounted = empty,
    onUnload:originUnmounted = empty,
    connections:connectionNames = [],
    ...options
 } = component;

let {
    mounted,
    unmounted,
    open,
    close
} = deploy(connectionNames , connections , component) ;

return {
    ...options,
    onLoad(options){

       let me = this ;
           
        mounted.call(me).then(() =>{

            originMounted.call(me , options) ;

        }) ;
        
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