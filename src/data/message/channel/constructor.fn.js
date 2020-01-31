
/**
 * 
 * 初始化消息通道
 * 
 * @import createProxy from object.proxy
 * 
 */

 let me = this,
    proxy = createProxy(me) ;

proxy.call('initReceiver' , me.onReceive.bind(me)) ;

me.proxy = proxy ;