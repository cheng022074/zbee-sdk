
/**
 * 
 * 初始化观察者
 * 
 * @import add from event.listener.add
 * 
 * @param {object} options 配置
 * 
 */

const EventEmitter = require('events') ;

function main({
    listeners
}){

    let me = this ;

    me.emitter = new EventEmitter() ;

    me.$suspendEvents = false ;

    if(listeners){

        add(me , listeners) ;
    }
}

