
/**
 * 
 * 消息通道 Electron 渲染 WebView 版
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
 * @require electron
 * 
 */
class main extends Channel{

    constructor({
        webview,
        ...options
    }){

        let me = this ;

        super({
            ...options,
            initFn(){

                me.webview = webview ;
            }
        }) ;

        me.isDestroyed = false ;
    }

    doReceive(receive){

        let {
            webview
        } = this ;

        webview.on('ipc-message' , (event , id , message) => {

            if(isArray(id)){

                message = id[1] ;
            }

            if(is(message)){

                receive(message) ;
            }

        }) ;

        webview.on('destroyed' , () => me.isDestroyed = true) ;
    }

    doSend(message){

        let {
            webview,
            isDestroyed
        } = this;

        if(!isDestroyed){

            webview.send('ipc-message' , message) ;
        }
    }
 }