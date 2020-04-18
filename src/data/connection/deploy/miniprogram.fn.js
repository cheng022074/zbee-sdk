
/**
 * 
 * 基于数据连接的小程序封装
 * 
 * @import Manager from data.connection.socket.manager value
 * 
 * @import empty from function.empty value
 * 
 * @import deploy from .lifecycle
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
} = deploy(connections , component) ;

function initSockets(){

     if(!this.hasOwnProperty('$connectionId')){

          let names = Object.keys(connections);

          for(let name of names){

               if(!connectionNames.includes(name)){

                    Manager.disconnect(connections[name]) ;

               }
          }

          for(let name of names){

               if(connectionNames.includes(name)){

                    Manager.connect(connections[name]) ;
               }
          }
     }
}

return {
    ...options,
    onLoad(options){

        let me = this ;

        initSockets.call(me) ;

        mounted.call(me) ;
            
        originLoad.call(me , options) ;
        
   },

   onShow(){

        let me = this ;

        initSockets.call(me) ;

        mounted.call(me) ;
            
        originShow.call(me , options) ;
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