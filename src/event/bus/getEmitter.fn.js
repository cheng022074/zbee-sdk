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

        emitters[module] = new BufferEventEmitter() ;
    }

    return emitters[module] ;
}

class BufferEventEmitter extends EventEmitter{

    constructor(){

        super() ;

        this.emitMessages = {} ;
    }

    emit(event , ...args){

        super.emit(event , ...args) ;

        let {
            emitMessages
        } = this ;

        if(!emitMessages.hasOwnProperty(event)){

            emitMessages[event] = [] ;
        }

        emitMessages[event].push(args) ;
    }

    addListener(event , listener){

        let {
            emitMessages
        } = this ;

        if(emitMessages.hasOwnProperty(event)){

            let messages = emitMessages[event] ;

            for(let message of messages){

                listener(message) ;
            }
        }

        super.addListener(event , listener) ;
    }
}
