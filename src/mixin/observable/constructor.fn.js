
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
 * @import define from object.property.inner.define
 * 
 * @param {object} options 配置
 * 
 */

const EventEmitter = require('events') ;

function main({
    listeners
}){
    
    let me = this,
        emitter = new EventEmitter() ;

    emitter.setMaxListeners(Infinity) ;

    define(me , {
        emitter,
        suspendEvents:false
    }) ;

    if(isObject(listeners) || isArray(listeners)){

        add(me , listeners) ;

    }

    
}

