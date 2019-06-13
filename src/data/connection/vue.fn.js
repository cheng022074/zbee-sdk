
/**
 * 
 * 基于数据连接的 VUE 封装
 * 
 * @import empty from function.empty value
 * 
 * @param {object} mixins Socket 对象
 * 
 * @param {mixed} component 组件定义对象
 * 
 * @return {mixed} 组件定义对象
 * 
 */

 const {
    socket,
    ajax
 } = mixins,{
    mounted = empty,
    destroyed = empty,
    subscribers = {},
    loaders = {},
    ...options
 } = component,
 {
    keys
 } = Object;

 return {
    mounted(){

        let me = this;

        if(socket){
            
            me.$subscribers = socket.subscribes({
                ...subscribers,
                scope:me
            }) ;
        }

        if(ajax){

            me.$loaders = ajax.subscribes({
                ...loaders,
                scope:me
            }) ;
        }

        mounted.call(me) ;
    },

    destroyed(){

        let me = this ;

        destroyed.call(me) ;

        if(socket){

            socket.unsubscribes(keys(subscribers)) ;
        }

        if(ajax){

            ajax.unsubscribes(keys(loaders)) ;
        }
    },

    ...options
 } ;