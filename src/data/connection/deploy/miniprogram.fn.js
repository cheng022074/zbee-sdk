
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
    connectionId,
    ...options
 } = component;

let {
    mounted,
    unmounted,
    subscribe,
    unsubscribe
} = deploy(connectionId , connectionNames , connections , component) ;

async function onHide(){

    let me = this ;

    await originHide.call(me) ;

    unmounted.call(me) ;
}

async function onUnload(){

    let me = this ;

    await originUnload.call(me) ;

    unmounted.call(me) ;
}

return {
    ...options,
    onLoad(options){

        let me = this ;

        mounted.call(me) ;
            
        originLoad.call(me , options) ;
        
   },

   onShow(){

        let me = this ;

        mounted.call(me) ;
            
        originShow.call(me , options) ;
   },

   onHide(){

        onHide.call(this) ;
   },

   onUnload(){

      onUnload.call(this) ;
   },
   subscribe,
   unsubscribe
} ;