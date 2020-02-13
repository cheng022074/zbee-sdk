
/**
 * 
 * 消息通道子进程版
 * 
 * @import Channel from data.message.channel value
 *
 * @param {object} config 配置 
 * 
 */

 class main extends Channel{

    doReceive(receive){

        process.on('message' , receive) ;
    }

    doSend(message){

        process.send(message) ;
    }
 }