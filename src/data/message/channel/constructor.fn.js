
/**
 * 
 * 初始化消息通道
 * 
 * @param {object} config 消息通道配置
 * 
 * @param {boolean} [config.reSendDelay = 0] 重发消息延迟
 * 
 * @param {data.message.Channel} [config.concatenateChannels] 转发消息通道
 * 
 * @import createProxy from object.proxy
 * 
 * @import createArrayProxy from array.proxy
 * 
 * @import generate from id.generate
 * 
 */

 let me = this,
    proxy = createProxy(me) ;

proxy.call('initReceiver' , me.receive.bind(me)) ;

me.proxy = proxy ;

me.addresses = {} ;

let rootAddress = generate('address-') ;

me.register(rootAddress) ;

me.rootAddress = rootAddress ;

me.reSendDelay = reSendDelay ;

me.concatenateChannels = createArrayProxy() ;

me.concat(concatenateChannels) ;

me.processivePromises = {} ;

me.sendMessages = {} ;