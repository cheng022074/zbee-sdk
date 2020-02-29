
/**
 * 
 * 消息通道 Electron 主进程版
 * 
 * @import from from array.from
 * 
 * @import is.array
 * 
 * @import is from is.message.reply
 * 
 * @import Channel from data.message.channel value
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

        webContents.on('ipc-message' , (event , id , message) => {

            if(isArray(id)){

                message = id[1] ;
            }

            if(is(message)){

                receive(message) ;
            }

        }) ;
    }

    doSend(message){

        let {
            webContents
        } = this;

        if(!webContents.isDestroyed()){

            webContents.send('ipc-message' , message) ;
        }
    }
 }