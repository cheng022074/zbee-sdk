
/**
 * 
 * 消息通道主进程版
 * 
 * @import from from array.from
 * 
 * @import isObject from is.object.simple
 * 
 * @import Channel from data.message.channel value
 *
 * @param {object} config 配置 
 * 
 */

 const {
    fork
 } = require('child_process') ;

 class main extends Channel{

    constructor({
        childProcess,
        ...options
    }){

        super({
            ...options,
            initFn(){

                if(isObject(childProcess)){

                    let {
                        path,
                        args,
                        ...options
                    } = childProcess ;

                    childProcess = fork(path , args , options) ;
                }

                this.childProcess = childProcess ;
            }
        }) ;
    }

    doReceive(receive){

        let {
            childProcess
        } = this ;

        childProcess.on('message' , message => receive(message)) ;
    }

    doSend(message){

        let {
            childProcess
        } = this;

        if(childProcess.connected){

            childProcess.send(message) ;
        }
    }
 }