
/**
 * 
 * 初始化观察者
 * 
 * @import add from event.listener.add
 * 
 * @import isObject from is.object.simple
 * 
 * @import is.array
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

    if(isObject(listeners) || isArray(listeners)){

        add(me , listeners) ;

    }
}

