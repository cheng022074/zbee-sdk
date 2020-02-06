
/**
 * 
 * 消息通道子进程版
 * 
 * @import Channel from data.mesasge.channel value
 *
 * @param {object} config 配置 
 * 
 */

 class main extends Channel{

    constructor(options){

        super(options) ;
    }

    doReceive(receive){

        process.on('message' , receive) ;
    }

    async doSend(message){

        process.send(message) ;
    }
 }