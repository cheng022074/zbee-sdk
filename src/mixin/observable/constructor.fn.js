
/**
 * 
 * 初始化观察者
 * 
 * @param {object} options 配置
 * 
 * @import createMap from map
 * 
 */

const EventEmitter = require('events') ;

function main({
    listeners
}){

    let me = this ;

    me.emitter = new EventEmitter() ;

    me.listeners = createMap() ;

    me.cacheFireEventDataList = [] ;

    if(listeners){

        me.addListeners(listeners) ;
    }
}

