
/**
 * 
 * 初始化消息通道
 * 
 * @param {object} config 消息通道配置
 * 
 * @param {boolean} [config.reSendDelay = 0] 重发消息延迟
 * 
 * @import createProxy from object.proxy
 * 
 */

 let me = this,
    proxy = createProxy(me) ;

proxy.call('initReceiver' , me.onReceive.bind(me)) ;

me.proxy = proxy ;

me.addresses = {} ;

me.reSendDelay = reSendDelay ;