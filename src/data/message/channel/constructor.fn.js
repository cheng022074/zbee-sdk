
/**
 * 
 * 初始化消息通道
 * 
 * @param {object} [config = {}] 消息通道配置
 * 
 * @param {boolean} [config.reSendDelay = 0] 重发消息延迟
 * 
 * @param {string} [config.rootAddress] 根地址
 * 
 * @param {mixed} [config.rootAddressConfig] 根地址配置
 * 
 * @param {object} [config.addresses] 地址配置
 * 
 * @param {function} [config.initFn] 初始化函数
 * 
 * @import createProxy from object.proxy
 * 
 * @import createArrayProxy from array.proxy
 * 
 * @import generate from id.generate
 * 
 * @import empty from function.empty value
 * 
 */

 let me = this,
    proxy = createProxy(me) ;

initFn = initFn || empty ;

me.proxy = proxy ;

me.addresses = {} ;

me.register(me.rootAddress = rootAddress , rootAddressConfig) ;

me.register(addresses) ;

me.reSendDelay = reSendDelay ;

me.concatenateChannels = createArrayProxy() ;

me.processivePromises = {} ;

me.messages = {} ;

initFn.call(me) ;

proxy.call('doReceive' , me.receive.bind(me)) ;