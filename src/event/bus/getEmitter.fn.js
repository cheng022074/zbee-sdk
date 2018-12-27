/**
 * 
 * 获得一个监听器
 * 
 * @param {string} module 模块名称
 * 
 * @return {EventEmitter} 监听器  
 * 
 */

const EventEmitter = require('events');

function main(module){

    let {
        emitters
    } = this ;

    if(!emitters.hasOwnProperty(module)){

        emitters[module] = new EventEmitter() ;
    }

    return emitters[module] ;
}
