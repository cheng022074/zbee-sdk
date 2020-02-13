
/**
 * 
 * 消息通道 Electron 主进程版
 * 
 * @import from from array.from
 * 
 * @import isObject from is.object.simple
 * 
 * @import Channel from data.message.channel value
 *
 * @import isReplyFailureMessage from is.message.reply.failure
 * 
 * @import isCancelProcessiveMessage from is.message.processive.cancel
 * 
 * @param {object} config 配置 
 * 
 */

 class main extends Channel{

    constructor({
        window,
        ...options
    }){

        super({
            ...options,
            initFn(){

                this.webContents = window.webContents ;
            }
        }) ;
    }

    doReceive(receive){

        let {
            webContents
        } = this ;

        webContents.on('ipc-message' , (id , message) => receive(message)) ;
    }

    doSend(message){

        let {
            webContents
        } = this;

        webContents.send('ipc-message' , message) ;
    }
 }