
/**
 * 
 * 消息通道 Electron 渲染 WebView 版
 * 
 * @import from from array.from
 * 
 * @import is.array
 * 
 * @import is from is.message
 * 
 * @import Channel from data.message.channel value
 * 
 * @import add from event.listener.add
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

        super({
            ...options,
            initFn(){

                this.webview = webview ;
            }
        }) ;

        this.isDestroyed = false ;
    }

    doReceive(receive){

        let me = this,
        {
            webview
        } = me ;

        add(webview , 'ipc-message' , ({
            channel,
            args
        }) => {

            let message = args[0] ;

            if(channel === 'ipc-message' && is(message)){

                receive(message) ;
            }
        }) ;

        add(webview , 'destroyed' , () => me.isDestroyed = true) ;
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