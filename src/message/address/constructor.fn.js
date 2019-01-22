
/**
 * 
 * 构建一个消息地址，用以发送与接收消息
 * 
 * @param {string} address 唯一的消息地址
 * 
 * @param {message.Plugin} plugin 发送与接收消息的插件
 * 
 * @param {string} relistenMode 重听消息接送模式 
 * 
 */

let me = this ;

me.address = address ;

me.plugin = plugin ;

me.relistenMode = relistenMode ;

me.target = null ;

me.unlistenMessages = [] ;

plugin.listen(me , ({
    listen
}) =>{

    let me = this,
    {
        activate
    } = me ;

    if(activate){

        let {
            target
        } = me ;

        if(target.hasOwnProperty(listen)){

            return target[listen](message) ;
        }

    }else{

        let {
            unlistenMessages
        } = me ;

        unlistenMessages.push(message) ;
    }

}) ;