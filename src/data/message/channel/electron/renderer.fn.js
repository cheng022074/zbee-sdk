
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

    doReceive(receive){

        ipcRenderer.on('ipc-message' , receive) ;
    }

    doSend(message){

        ipcRenderer.send(message.id , message) ;
    }
 }