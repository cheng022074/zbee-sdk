
/**
 * 
 * 初始化数据存储器
 * 
 * @import createProxy from data.proxy.create
 * 
 * @import onProxyRead from .proxy.read
 * 
 * @import data.proxy.memory
 * 
 * @param {object} [options = {}] 配置
 * 
 * @param {string} [options.proxy = 'memory'] 数据代理
 * 
 */

 let me = this ;

 (me.proxy = createProxy(proxy)).addListeners({
     read:onProxyRead,
     scope:me
 }) ;

 me.data = [] ;