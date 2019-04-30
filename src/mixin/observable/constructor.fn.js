
/**
 * 
 * 初始化观察者
 * 
 * @import createMap from map
 * 
 */

const EventEmitter = require('events') ;

function main(){

    let me = this ;

    me.emitter = new EventEmitter() ;

    me.listeners = createMap() ;
}

