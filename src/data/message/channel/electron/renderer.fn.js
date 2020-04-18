
/**
 * 
 * 消息通道Electron 渲染进程版
 * 
 * @import Channel from data.message.channel value
 *
 * @param {object} config 配置 
 * 
 */

 const {
    ipcRenderer
 } = require('electron') ;

class main extends Channel{

    constructor({
        isWebview = false,
        ...options
    }){

        super(options) ;

        this.isWebview = isWebview ;
    }

    doReceive(receive){

        ipcRenderer.on('ipc-message' , (event , message) => receive(message)) ;
    }

    doSend(message){

        let {
            isWebview
        } = this ;

        ipcRenderer[isWebview ? 'sendToHost' : 'send']('ipc-message' , message) ;
    }
 }