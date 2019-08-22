
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
 * @param {array} [defaultConnectionNames = []] 默认连接名称集合
 * 
 * @return {object} 增加订阅功能的组件定义对象
 * 
 */

const {                 
    onLoad:originLoad = empty,
    onShow:originShow = empty,
    onHide:originHide = empty,
    onUnload:originUnload = empty,
    connections:connectionNames = defaultConnectionNames,
    ...options
 } = component;

let {
    mounted,
    unmounted,
    subscribe,
    unsubscribe
} = deploy(connectionNames , connections , component) ;

return {
    ...options,
    onLoad(options){

       let me = this ;
           
        mounted.call(me).then(() =>{

            originLoad.call(me , options) ;

        }) ;
        
   },

   onShow(){

        let me = this ;
            
        mounted.call(me).then(() =>{

            originShow.call(me , options) ;

        }) ;
   },

   onHide(){

        let me = this ;

        originHide.call(me) ;

        unmounted.call(me) ;
   },

   onUnload(){

       let me = this ;

       originUnload.call(me) ;

       unmounted.call(me) ;
   },
   subscribe,
   unsubscribe
} ;