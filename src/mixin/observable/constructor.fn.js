
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

    let me = this,
        emitter = me.emitter = new EventEmitter() ;

    emitter.setMaxListeners(Number.MAX_VALUE) ;

    me.$suspendEvents = false ;

    if(listeners){

        add(me , listeners) ;
    }
}

